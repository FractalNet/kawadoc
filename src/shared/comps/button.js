import React from 'react'
import './button.css'

export default class Button extends React.Component {
    render() {
        const type = this.props.type || "primary"
        return (
            <button onClick={this.props.onClick} className={`button button-${type}`}>{this.props.children}</button>
        )
    }
}