import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import { incrementNum, decrementNum, resetNum } from "../actions/counterActions";

// export class Controller extends Component {

//   render() {
//     return (
//       <Controls {...this.props}/>
//     );
//   }
// }

export const mapDispatchToProps = dispatch => {
    return {
        increment: (amount) => {
            dispatch(incrementNum(amount));
        },
        decrement: (amount) => {
            dispatch(decrementNum(amount));
        },
        reset: () => {
            dispatch(resetNum());
        }
    };
};

export default connect(null, mapDispatchToProps)(Controls);
