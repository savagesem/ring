import {reducer} from "../reducers/reducer";
import {DRAG_START, DRAG_FINISH} from "../actions/dnd";
import {initialState} from "./mocks/stateMock";

const state = {
    ...initialState, dnd: {
        columnIndex: 0,
        cardIndex: 1
    }
};

const nextColumnsState =  [
    {name: "Test 1", cards:["one", "three"]},
    {name: "Test 2", cards:["4", "5", "6", "two"]}
];

describe("Aplication reducer", () => {
    it("Should add column and card indexes to the dnd state", () => {
        const action = {
            type: DRAG_START,
            target: {
                columnIndex: 0,
                cardIndex: 1
            }
        };
        const result = reducer(undefined, action);

        expect(result.dnd).toEqual({
            columnIndex: 0,
            cardIndex: 1
        })
    });

    it("Should add first card to the second column", () => {
        const action = {
            type: DRAG_FINISH,
            dropZone: {
                columnIndex: 1
            }
        };
        const result = reducer(state, action);

        expect(result.columns).toEqual(nextColumnsState);
    })
});