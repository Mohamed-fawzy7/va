import React, { Component } from "react";
import PropTypes from "prop-types";
import ActionButton from './ActionButton';

 class Controls extends Component {

  render() {
    const { incrementLabel, decrementLabel,resetLabel, increment, decrement, reset, disabled, sliderCount} = this.props;

    return (
      <div className="controls">
          <ActionButton label={incrementLabel} action={increment} disabled={disabled} sliderCount={sliderCount}/>
          <ActionButton label={decrementLabel} action={decrement} disabled={disabled} sliderCount={sliderCount}/>
          <ActionButton label={resetLabel} action={reset} disabled={disabled}/>
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
};

export default Controls;
