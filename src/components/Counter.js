import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

 class Counter extends Component {
  render() {

    const { value, disabled, sliderValue } = this.props;

    return (
      <div className="counter">
        <div>{value}</div>
        <Controls disabled={disabled} sliderValue={sliderValue}/>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  count: PropTypes.number
};

export default Counter;
