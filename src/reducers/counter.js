import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
    console.log("counter reducer", action.payload)
    if (action.payload) {
        console.log(state, action.payload.num)
    }
    switch (action.type) {
        case INCREMENT_NUM:
            return state + action.payload.num;
        case DECREMENT_NUM:
            return state - action.payload.num;
        case RESET:
            return 0;
    }

    return state;
}