import React from "react";
import Field from "../UI/UI";
import Country from "../Option/Country";
import countries from "../Data/countries";
import Cities from "../Option/Cities";
import cities from "../Data/cities"

export default class PersonalDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            renderСities: []
        };
    }
    getCities = arr => {
        const countryNumber = Number(arr);
        const activeCities = [];
        for (let city in cities) {
            const index = cities[city];
            if (countryNumber === index.country) {
                activeCities.push({ id: city, name :index.name });
            }
        }
        console.log(activeCities);
        this.setState({
            renderСities: activeCities
        });
    };
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.values.country !== prevProps.values.country) {
            this.getCities(this.props.values.country);
        }
    };
    componentDidMount() {
        this.getCities(this.props.values.country);
    }
    render() {
        const { values, onChange, errors } = this.props;
        return (
            <div>
                <Field
                    id="email"
                    labelText="email"
                    type="text"
                    placeholderText="Enter email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <Field
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
                    array={this.state.renderСities}
                    onChange={onChange}
                    values={values}
                    error={errors.city}
                />
            </div>
        );
    }
}
