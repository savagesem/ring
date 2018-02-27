export const ADD_COLUMN = "ADD_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";

export const addColumn = (columnName) => {
    return {
        type: ADD_COLUMN,
        columnName
    }
};

export const removeColumn = (columnIndex) => {
    return {
        type: REMOVE_COLUMN,
        columnIndex
    }
};
