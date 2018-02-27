import {ADD_COLUMN, REMOVE_COLUMN} from "../actions/columns";
import {ADD_CARD} from "../actions/cards";
import {DRAG_START, DRAG_FINISH} from "../actions/dnd";
import {initialState} from "../mocks/stateMock";

export const reducer = (state = initialState, action) =>{
    let newColumns;

    switch (action.type){
        case ADD_COLUMN:{
            return {...state, columns: [...state.columns, {name: action.columnName, cards: []}]}
        }
        case REMOVE_COLUMN:
            newColumns =  [...state.columns];
            newColumns.splice(action.columnIndex, 1);

            return {...state, columns: newColumns};
        case ADD_CARD:
            newColumns = [...state.columns];
            newColumns[action.columnIndex].cards.push(action.cardName);

            return {...state, columns: newColumns};
        case DRAG_START:
            return {...state, dnd: action.target};
        case DRAG_FINISH:
            if(JSON.stringify(action.dropZone) === JSON.stringify(state.dnd)){
                return {...state, dnd: {}};
            }
            const {columnIndex} = action.dropZone;
            const {cardIndex} = state.dnd;
            const col = [...state.columns];
            if (cardIndex === undefined){
                col[columnIndex] = state.columns[state.dnd.columnIndex];
                col[state.dnd.columnIndex] = state.columns[columnIndex];
            }else{
                col[columnIndex].cards.push(state.columns[state.dnd.columnIndex].cards[cardIndex]);
                col[state.dnd.columnIndex].cards.splice(cardIndex, 1);
            }

            return {...state, dnd: {}, columns: col};
        default:
            return state;
    }
};
