import React from "react";
import UIField from "../UI/UIField";
import {inject, observer} from "mobx-react";

@inject(({userStore}) => ({
    values: userStore.values,
    errors: userStore.errors
}))
@observer
class UserDetails extends React.Component {
    render() {
        const { values, errors } = this.props;
        return (
            <div className="form-group">
                <UIField
                    id="firstName"
                    labelText="firstName"
                    type="text"
                    placeholderText="Enter firstName"
                    name="firstName"
                    value={values.firstName}
                    error={errors.firstName}
                />
                <UIField
                    id="lastName"
                    labelText="lastName"
                    type="text"
                    placeholderText="Enter lastName"
                    name="lastName"
                    value={values.lastName}
                    error={errors.lastName}
                />
                <UIField
                    id="password"
                    labelText="Password"
                    type="password"
                    placeholderText="Enter password"
                    name="password"
                    value={values.password}
                    error={errors.password}
                />
                <UIField
                    id="repeatPassword"
                    labelText="Repeat password"
                    type="password"
                    placeholderText="Enter repeatPassword"
                    name="repeatPassword"
                    value={values.repeatPassword}
                    error={errors.repeatPassword}
                />
                <fieldset className="form-group">
                    <div>Gender</div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={values.gender === "male"}
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={values.gender === "female"}
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default UserDetails;