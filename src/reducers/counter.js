import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

let initialState = {
    counter1: 0,
    counter2: 0,
    updates: 0
}

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    if (action.payload && action.payload.amount > -1) {
        newState.updates++;
    }
    switch (action.type) {
        case INCREMENT_NUM:
            newState.counter1 += action.payload.amount;
            break;
        case DECREMENT_NUM:
            newState.counter1 -= action.payload.amount;
            break;
        case RESET:
            newState.counter1 = 0;
            break;
    }
    if(newState.updates % 10 === 0){
        newState.counter2 = - newState.counter1;
    }
    return newState;
}