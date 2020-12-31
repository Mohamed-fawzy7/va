import React, { Component } from "react";
import Counter, { mapStateToProps } from "./containers/Counter";
import CounterSlider from './containers/Slider';
import {connect} from 'react-redux'

class App extends Component {
    
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


export default connect(mapStateToProps, null)(App);
