import React, { Component } from 'react'

export default class CounterSlider extends Component {
    handleSliderChange = (e) => {
        this.props.setSlider(parseInt(e.target.value));
    }
    render() {
        return (
            <React.Fragment>
                <input type="range" className="count-slider" defaultValue="1" step="1" min="1" max="100" onChange={this.handleSliderChange} />
                value: {this.props.sliderValue}
            </React.Fragment>
        )
    }
}
