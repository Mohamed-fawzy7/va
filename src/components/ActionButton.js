import React, { Component } from 'react'

export default class ActionButton extends Component {
    render() {
        return (
            <div className="control" onClick={() => { this.props.action(); }}>
                <span>{this.props.label}</span>
            </div>
        )
    }
}
