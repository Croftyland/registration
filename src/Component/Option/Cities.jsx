import React from "react";
import {inject, observer} from "mobx-react";

@inject(({ userStore }) => ({
    onChange: userStore.onChange,
}))

@observer
 class Cities extends React.Component {
    render() {
        const { array, onChange, values, error, name } = this.props;
        console.log("values",values);
        return (
            <div className="form-group">
                <label htmlFor="country">City</label>
                <select
                    className="form-control"
                    id={name}
                    name={name}
                    onChange={onChange}
                >
                    <option value="">Select city</option>
                    {array
                        ? array.map(item => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })
                        : null}
                </select>
                {error ? <div className="invalid-feedback">{error}</div> : null}
            </div>
        );
    }
}
export default Cities;
