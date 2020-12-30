import React, { Component } from "react";
import Counter from "./containers/Counter";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Counter />
                <Counter />
                {/* <Counter /> */}
            </React.Fragment>
        );
    }
}

export default App;
