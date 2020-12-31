import store from '../store';
import { incrementNum, decrementNum, resetNum } from '../actions/counterActions';
describe("counter tests", () => {
    it("counter1 should be 10 if we dispatch increment 6 then 4", () => {
        store.dispatch(incrementNum(6));
        store.dispatch(incrementNum(4));
        const result = store.getState();
        expect(result.counters.counter1).toEqual(10);
    });

    it("counter2 should be 0 because we didn't complete 10 actions", () => {
        store.dispatch(incrementNum(10));
        const result = store.getState();
        expect(result.counters.counter2).toBeCloseTo(0);
    });

    it("counter1 should be 0 if dispatch reset", () => {
        store.dispatch(resetNum());
        let result = store.getState();
        expect(result.counters.counter1).toEqual(0);
    })

    it("counter1 should be -10 if we dispatch decrement 10", () => {
        store.dispatch(decrementNum(10));
        let result = store.getState();
        expect(result.counters.counter1).toEqual(-10);
    })
    
});