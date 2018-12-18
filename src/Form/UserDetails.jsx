import React from "react";
import UI from "../UI/UI";


export default class BasicInfo extends React.Component {
    render() {
        const { values, onChange, errors } = this.props;
        return (
            <div className="form-group">
                <UI
                    id="firstName"
                    labelText="firstName"
                    type="text"
                    placeholderText="Enter firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={onChange}
                    error={errors.firstName}
                />
                <UI
                    id="lastName"
                    labelText="lastName"
                    type="text"
                    placeholderText="Enter lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange}
                    error={errors.lastName}
                />
                <UI
                    id="password"
                    labelText="Password"
                    type="password"
                    placeholderText="Enter password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    error={errors.password}
                />
                <UI
                    id="repeatPassword"
                    labelText="Repeat password"
                    type="password"
                    placeholderText="Enter repeatPassword"
                    name="repeatPassword"
                    value={values.repeatPassword}
                    onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
