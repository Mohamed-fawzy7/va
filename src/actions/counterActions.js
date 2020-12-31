import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export function incrementNum(num) {
    console.log("increment action", num);
    return {
        type: INCREMENT_NUM,
        payload: {
            num
        }
    };
}

export function decrementNum(num) {
    return {
        type: DECREMENT_NUM,
        payload: {
            num
        }
    };
}

export function resetNum(payload) {
    return {
        type: RESET
    };
}

