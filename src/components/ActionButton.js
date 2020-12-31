import React, { Component } from 'react'

export default class ActionButton extends Component {
    handleClick = ()=>{
        if(!this.props.disabled){
            console.log(Number(this.props.sliderCount));
            this.props.action(Number(this.props.sliderCount));
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
