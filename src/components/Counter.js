import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
    render() {

        const { value, disabled, sliderValue } = this.props;
        const backgroundColor = value === 0 ? "#FFF" : value > 0 ? "#F55" : "#5F5";
        return (
            <div className="counter" onKeyDown={()=>{console.log("asdasd")}}>
                <div className="counterValue" style={{ background: backgroundColor, padding: "10px", marginBottom: "10px" }}>{value}</div>
                <Controls disabled={disabled} sliderValue={sliderValue} />
            </div>
        );
    }
}

Counter.propTypes = {
    count: PropTypes.number,
    count: PropTypes.number
};

export default Counter;
