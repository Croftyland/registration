import React from "react";

export default class Country extends React.Component {
    render() {
        const { array, onChange } = this.props;
        return (
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                    className="form-control"
                    id="country"
                    name="country"
                    onChange={onChange}
                >
                    <option value="">Select country</option>
                    {array.map(item => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}