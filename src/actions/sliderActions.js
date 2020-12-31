import { SET_SLIDER } from "../constants/ActionTypes";

export function setSlider(count) {
    return {
        type: SET_SLIDER,
        payload: {
            count
        }
    };
}
