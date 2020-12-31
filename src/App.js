import React, { Component } from "react";
import Counter from "./containers/Counter";
import CounterSlider from './containers/Slider';

class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="counters">
                    <Counter />
                    <Counter disabled={true} />
                </div>
                <CounterSlider />
            </React.Fragment>
        );
    }
}

export default App;
