import React from "react";

export default class Button extends React.Component {
    render() {
        const { name } = this.props;
        return <span  onClick={this.props.onChangeStep(name)}>{name}</span>;
    }
}