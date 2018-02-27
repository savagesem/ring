export const ADD_CARD = "ADD_CARD";

export const addCard = (columnIndex, cardName) => {
    return {
        type: ADD_CARD,
        columnIndex,
        cardName
    }
};