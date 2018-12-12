import React, {Component} from 'react';
import { Form, Button } from "semantic-ui-react";

export default class UserDetails extends Component {

    save = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        return (
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        onChange={this.props.handleChange('password')}
                        defaultValue={values.password}/>
                </Form.Field>
                <Form.Field>
                    <label>RepeatPassword</label>
                    <input
                        placeholder='RepeatPassword'
                        onChange={this.props.handleChange('repeatPassword')}
                        defaultValue={values.repeatPassword}/>
                </Form.Field>
                <Form.Field>
                    <label>Gender</label>
                    <input type="radio"
                           name="gender"
                           id="male"
                           value="male"/>
                        <label className="form-check-label" htmlFor="male">Male</label>
                    <input className="form-check-input"
                           type="radio"
                           name="gender"
                           id="female"
                           value="female"/>
                    <label className="form-check-label" htmlFor="female">Female</label>
                </Form.Field>
                <Button onClick={this.save}>Next</Button>
            </Form>
        );
    }
}
