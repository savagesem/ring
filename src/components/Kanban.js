import React from 'react';
import PropTypes from "prop-types"
import {Column} from "./Column";
import {ColumnInput} from "../styled/input";
import {Viewport} from "../styled/viewport";

const propTypes = {
    columns: PropTypes.array,
    onKeyPress: PropTypes.func,
    addCard: PropTypes.func,
    dragStart: PropTypes.func,
    dragFinish: PropTypes.func,
    removeColumn: PropTypes.func
};

const defaultProps = {
    columns: [],
    onKeyPress(){},
    addCard(){}
};

export const Kanban = ({columns, onKeyPress, addCard, dragStart, dragFinish, removeColumn}) => {
    return (
        <Viewport>
            {columns.map((col, idx) =>
                <Column
                    key={col.name+idx}
                    columnIndex={idx}
                    name={col.name}
                    addCard={addCard}
                    cards={col.cards}
                    dragStart={dragStart}
                    dragFinish={dragFinish}
                    removeColumn={removeColumn}
                />)}
            <ColumnInput placeholder="Add column..." onKeyPress={onKeyPress}/>
        </Viewport>
    )
};

Kanban.propTypes = propTypes;
Kanban.defaultProps = defaultProps;