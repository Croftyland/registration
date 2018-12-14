import React, {Component} from 'react';
import Avatar from './Avatar';
import Success from './Success';
import Steps from '../Buttons/Steps';
import Button from '../Buttons/Button'
import UserDetails from './UserDetails';
import Confirmation from './Confirmation';
import PersonalDetails from './PersonalDetails';

class MainForm extends Component {
constructor() {
    super();
    this.state = {
        step: 3,
        values: {
            firstName: '',
            lastName: '',
            password: '',
            repeatPassword: '',
            email: '',
            mobile: '',
            gender: 'male',
            country: '',
            city: ''
        },
        errors: {
            step: 1,
            firstName: false,
            lastName: false,
            password: false,
            repeatPassword: false,
            email: false,
            mobile: false,
            gender: false,
            country: false,
            city: false
        },
        activeStep: 1,
        isDisablePrevBtn: true,
        isDisableNextBtn: true
    }
}

    onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            values: { ...prevState.values, [name]: value }
        }));
        console.log(e.target.name,e.target.value,e.target.checked)
    };
    validateFields = () => {
        const errors = {};
        if (this.state.activeStep === 1) {
            if (this.state.values.firstName.length < 5) {
                errors.firstName = "Must be more then 4 characters";
            }
            if (this.state.values.lastName.length < 5) {
                errors.lastName = "Must be more then 4 characters";
            }
            if (this.state.values.password.length < 6) {
                errors.password = "Must be more then 5 characters";
            }
            if (
                this.state.values.repeatPassword !== this.state.values.password ||
                this.state.values.password.length === 0
            ) {
                errors.repeatPassword = "Password must be the same";
            }
        } else if (this.state.activeStep === 2) {
            const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
            if (!regExpMail.test(this.state.values.email)) {
                errors.email = "Invalid email address";
            }
            if (!this.state.values.city) {
                errors.city = "Required";
            }
        }
        return errors;
    };
    onChangeStep = event => () => {
        const { activeStep } = this.state;
        const errors = this.validateFields();

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
        } else {
            this.setState({
                errors: {}
            });
            if (event === "Previous" && activeStep > 1) {
                this.setState({ activeStep: activeStep - 1 });
            } else if (event === "Next" && activeStep < 4) {
                this.setState({ activeStep: activeStep + 1 });
            }
        }
    };
    onChangeAvatar = event => {
        const avatar = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            this.setState({
                values: { avatar: event.target.result }
            });
        };

        reader.readAsDataURL(avatar);

        console.log("ava", event.target);
    };


    render() {
        const { activeStep, values, errors } = this.state;
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <Steps activeStep={activeStep} />
                    {activeStep === 1 ? (
                        <UserDetails
                            errors={errors}
                            onChange={this.onChange}
                            values={values}
                        />
                    ) : null}
                    {activeStep === 2 ? (
                        <PersonalDetails
                            errors={errors}
                            onChange={this.onChange}
                            values={values}
                        />
                    ) : null}
                    {activeStep === 3 ? (
                        <Avatar
                            error={errors.avatar}
                            onChangeAvatar={this.onChangeAvatar}
                            img={values.avatar}
                        />
                    ) : null}
                    {activeStep === 4 ? (
                        <Confirmation
                            errors={errors}
                            onChange={this.onChange}
                            values={values}
                        />
                    ) : null}
                    {activeStep === 5 ? (
                        <Success/>
                    ) : null}

                    <div className="d-flex justify-content-center">
                        <Button name="Previous" onChangeStep={this.onChangeStep} />
                        <Button name="Next" onChangeStep={this.onChangeStep} />
                    </div>
                </form>
            </div>
        );
    }
}

export default MainForm;