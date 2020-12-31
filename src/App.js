import React, { Component } from "react";
import Counter, { mapStateToProps } from "./containers/Counter";
import {mapDispatchToProps} from "./containers/Controls";
import CounterSlider from './containers/Slider';
import { connect } from "react-redux";

class App extends Component {
    componentDidMount() {
        document.addEventListener("keydown", (e) => {
                if(e.ctrlKey && e.key === "ArrowRight"){
                    this.props.increment(this.props.sliderValue)
                } else if(e.ctrlKey && e.key === "ArrowLeft"){
                    this.props.decrement(this.props.sliderValue)
                }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="counters">
                    <Counter value={this.props.counters.counter1} />
                    <Counter value={this.props.counters.counter2} disabled={true} />
                </div>
                <CounterSlider />
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
