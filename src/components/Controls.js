import React, { Component } from "react";
import PropTypes from "prop-types";
import ActionButton from './ActionButton';

class Controls extends Component {    
    incrementIntervalId = "";
    decrementIntervalId = "";
    startAutoInc = (amount) => {
        clearInterval(this.decrementIntervalId);
        clearInterval(this.incrementIntervalId);
        this.incrementIntervalId = setInterval(() => {
            this.props.increment(amount)
        }, 2000)
    }

    startAutoDec = (amount) => {
        console.log(amount)
        clearInterval(this.incrementIntervalId);
        clearInterval(this.decrementIntervalId);
        this.decrementIntervalId = setInterval(() => {
            this.props.decrement(amount)
        }, 2000)
    }
    incrementClicks = 0;
    decrementClicks = 0;

    handleIncrementClick = (amount)=>{
        if(this.decrementClicks > 0){
            this.decrementClicks = 0;
            this.incrementClicks = 0;
        }
        this.incrementClicks++;
        this.props.increment(amount);
    }
    handleDecrementClick = (amount)=>{
        this.decrementClicks++;
        this.props.decrement(amount)
        if(this.incrementClicks >= 3 && this.incrementClicks % 2 === 1 && this.decrementClicks === this.incrementClicks + 2){
            alert("you clicked increment odd times and decrement odd times")
        }
    }

    render() {
        const { incrementLabel, decrementLabel, resetLabel, reset, disabled, sliderValue, autoIncLabel, autoDecLabel } = this.props;

        return (
            <div className="controls">
                <ActionButton label={incrementLabel} action={this.handleIncrementClick} disabled={disabled} sliderValue={sliderValue} />
                <ActionButton label={decrementLabel} action={this.handleDecrementClick} disabled={disabled} sliderValue={sliderValue} />
                <ActionButton label={resetLabel} action={reset} disabled={disabled} />
                <ActionButton label={autoDecLabel} action={this.startAutoDec} disabled={disabled} sliderValue={sliderValue}/>
                <ActionButton label={autoIncLabel} action={this.startAutoInc} disabled={disabled} sliderValue={sliderValue}/>
            </div>
        );
    }
}

Controls.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    resetLabel: PropTypes.string,
    incrementLabel: PropTypes.string,
    decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
    incrementLabel: "+",
    decrementLabel: "-",
    resetLabel: "reset",
    autoIncLabel: "auto inc",
    autoDecLabel: "auto dec"
};

export default Controls;
