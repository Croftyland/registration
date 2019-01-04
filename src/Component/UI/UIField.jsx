import React from "react";
import { observer } from "mobx-react";

 class UIField extends React.Component {
    render() {
        const {
            id,
            labelText,
            name,
            placeholder,
            type,
            onChange,
            value,
            error
        } = this.props;

        return (
            <div className="form-group">
                <label htmlFor={id}>{labelText}</label>
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {error ? <div className="invalid-feedback">{error}</div> : null}
            </div>
        );
    }
}
export default observer(UIField);