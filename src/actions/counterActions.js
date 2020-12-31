import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export function incrementNum(amount) {
    return {
        type: INCREMENT_NUM,
        payload: {
            amount
        }
    };
}

export function decrementNum(amount) {
    return {
        type: DECREMENT_NUM,
        payload: {
            amount
        }
    };
}

export function resetNum() {
    return {
        type: RESET,
        payload: {
            amount: 0
        }
    };
}

