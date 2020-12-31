import React, { Component } from 'react'

export default class ActionButton extends Component {
    handleClick = ()=>{
        if(!this.props.disabled){
            console.log(this.props.sliderValue)
            this.props.action(this.props.sliderValue);
        }
    }
    render() {
        return (
            <div className={`control ${this.props.disabled ? "disabled-button" : ""}`} onClick={this.handleClick}>
                <span>{this.props.label}</span>
            </div>
        )
    }
}
