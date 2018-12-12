import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    save = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {values: { firstName, lastName, gender, email, mobile, country, city  }} = this.props;

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
                        <List.Content>{city}, {country}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.save}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;