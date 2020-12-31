import { SET_SLIDER } from "../constants/ActionTypes";

export default function reducer(state = 1, action) {
    switch (action.type) {
        case SET_SLIDER:
            return action.payload.sliderValue;
    }
    return state;
}