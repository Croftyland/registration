import React, {Component} from 'react';
//import Avatar from './Avatar';
import Success from './Success';
import UserDetails from './UserDetails';
import Confirmation from './Confirmation';
import PersonalDetails from './PersonalDetails';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        email: '',
        mobile: '',
        gender: '',
        country: '',
        city: ''
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleChange = input => event => {
        this.setState({[input]: event.target.value})
    };


    render() {
        const {step} = this.state;
        const { firstName, lastName, password, repeatPassword, gender, email, mobile, country, city  } = this.state;
        const values = { firstName, lastName, password, repeatPassword, gender, email, mobile, country, city  };
        switch(step){
            case 1:
                return <UserDetails
                    nextStep={ this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />;
            case 2:
                return <PersonalDetails
                    nextStep={ this.nextStep }
                    prevStep={ this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />;
            // case 3:
            //     return <Avatar
            //         nextStep={ this.nextStep }
            //         prevStep={ this.prevStep }
            //         handleChange = { this.handleChange }
            //         values = { values }
            //     />;
            case 3:
                return <Confirmation
                    nextStep={ this.nextStep }
                    prevStep={ this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />;
            case 4:
                return <Success/>
        }


    }
}

export default MainForm;