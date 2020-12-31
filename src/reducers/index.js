// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import counters from "./counter";
import slider from "./slider";
// import secondCounter from './exampleReducer';

export default combineReducers({ counters, sliderValue: slider });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
