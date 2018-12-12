import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class PersonalDetails extends Component{
    save = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const { values } = this.props;
        return(
            <Form >
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email'
                           onChange={this.props.handleChange('email')}
                           defaultValue={values.age}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email'
                           onChange={this.props.handleChange('email')}
                           defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City'
                           onChange={this.props.handleChange('city')}
                           defaultValue={values.city}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input placeholder='Country'
                           onChange={this.props.handleChange('country')}
                           defaultValue={values.country}
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.save}>Next</Button>
            </Form>
        )
    }
}

export default PersonalDetails;