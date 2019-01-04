import React, {Component} from 'react';
import Avatar from './Avatar';
import Success from './Success';
import Steps from '../Navigation/Steps';
import Button from '../Buttons/Button'
import UserDetails from './UserDetails';
import Confirmation from './Confirmation';
import PersonalDetails from './PersonalDetails';
import { observer, inject } from "mobx-react";

@inject(({ userStore }) => ({
    activeStep: userStore.activeStep,
    onChangeStep: userStore.onChangeStep,
    onClearInfo: userStore.onClearInfo
}))

@observer
class MainForm extends Component {
    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <Steps/>
                    {this.props.activeStep === 1 ? (
                        <UserDetails />
                    ) : null}
                    {this.props.activeStep === 2 ? (
                        <PersonalDetails />
                    ) : null}
                    {activeStep === 3 ? (
                        <Avatar/>
                    ) : null}
                    {this.props.activeStep === 4 ? (
                        <Confirmation />
                    ) : null}
                    {activeStep === 5 ? (
                        <Success/>
                    ) : null}

                    <Button />
                </form>
            </div>
        );
    }
}

export default MainForm;