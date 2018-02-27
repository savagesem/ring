import {connect} from 'react-redux'
import {Kanban} from "../components/Kanban";
import {addColumn, removeColumn} from "../actions/columns";
import {addCard} from "../actions/cards";
import {dragStart, dragFinish} from "../actions/dnd";

const mapStateToProps = state => {
    return {
        columns: state.columns
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onKeyPress: evt => {
            if (evt.key === "Enter") {
                dispatch(addColumn(evt.target.value));
                evt.target.value = "";
            }
        },
        removeColumn: columnIndex => {
            dispatch(removeColumn(columnIndex));
        },
        addCard: (columnIndex, cardName) => {
            dispatch(addCard(columnIndex, cardName))
        },
        dragStart: target => {
            dispatch(dragStart(target))
        },
        dragFinish: dropZone => {
            dispatch(dragFinish(dropZone))
        }
    }
};

export const KanbanContainer = connect(mapStateToProps, mapDispatchToProps)(Kanban);