import React, { Component } from "react";
import PropTypes from "prop-types";
import ActionButton from './ActionButton';

 class Controls extends Component {

  render() {
    const { incrementLabel, decrementLabel,resetLabel, increment, decrement, reset} = this.props;

    return (
      <div className="controls">
          <ActionButton label={incrementLabel} action={increment}/>
          <ActionButton label={decrementLabel} action={decrement}/>
          <ActionButton label={resetLabel} action={reset}/>
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
