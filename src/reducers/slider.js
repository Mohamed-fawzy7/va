import { SET_SLIDER } from "../constants/ActionTypes";

export default function reducer(state = 1, action) {
    console.log("slider reducer")
    switch (action.type) {
        case SET_SLIDER:
            return action.payload.count;
    }
    return state;
}