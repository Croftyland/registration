import React from "react";
import UIField from "../UI/UIField";
import Country from "../Option/Country";
import countries from "../../Data/countries";
import Cities from "../Option/Cities";


import { observer, inject } from "mobx-react";

@inject(({ userStore }) => ({
    values: userStore.values,
    onChange: userStore.onChange,
    errors: userStore.errors,
    getCities: userStore.getCities
}))

@observer
 class PersonalDetails extends React.Component {

    render() {
        const { values, onChange, errors } = this.props;
        return (
            <React.Fragment>
                <UIField
                    id="email"
                    labelText="email"
                    type="text"
                    placeholderText="Enter email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <UIField
                    id="mobile"
                    labelText="mobile"
                    type="tel"
                    placeholderText="Enter mobile"
                    name="mobile"
                    value={values.mobile}
                    onChange={onChange}
                    error={errors.mobile}
                />
                <Country array={countries} onChange={onChange} />
                <Cities
                    array={this.props.getCities}
                    onChange={onChange}
                    name = "city"
                    values={values}
                    error={errors.city}
                />
            </React.Fragment>
        );
    }
}
export default PersonalDetails;