import React, { Component } from 'react';
import cities from '../../Data/cities'
import countries from '../../Data/countries'

import { List } from 'semantic-ui-react';

import { observer, inject } from "mobx-react";

@inject(({ userStore }) => ({
    values: userStore.values
}))

@observer
class Confirmation extends Component{

    render(){
        const  { country, city, firstName, lastName,gender, mobile, email } = this.props.values;
        const cityText = cities[city].name;
        const countryText = (countries.find(item => {
            return item.id === Number(country);
        })).name;
        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Gender: {gender}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name=' email' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mobile' />
                        <List.Content>Mobile: {mobile}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{cityText}, {countryText}</List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }
}

export default Confirmation;