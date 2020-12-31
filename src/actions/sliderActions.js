import { SET_SLIDER } from "../constants/ActionTypes";

export function setSlider(sliderValue) {
    return {
        type: SET_SLIDER,
        payload: {
            sliderValue
        }
    };
}
