import React, {Component} from 'react';
import PropTypes from "prop-types"

import {ColumnBlock, ColumnName} from "../styled/column";
import {CardInput} from "../styled/input";
import {Card} from "./Card";

const propTypes = {
    name: PropTypes.string,
    columnIndex: PropTypes.number,
    addCard: PropTypes.func,
    cards: PropTypes.array,
    dragStart: PropTypes.func,
    dragFinish: PropTypes.func,
    removeColumn: PropTypes.func
};

const defaultProps = {
    name: "",
    cards: [],
    addCard() {
    }
};

export class Column extends Component {
    _onKeyPress = evt => {
        if (evt.key === "Enter") {
            this.props.addCard(this.props.columnIndex, evt.target.value);
            evt.target.value = "";
        }
    };

    _drag = evt => {
        this.props.dragStart({columnIndex: this.props.columnIndex});
    };

    _dragOver = evt => {
        evt.preventDefault();
    };

    _onDrop = evt => {
        this.props.dragFinish({columnIndex: this.props.columnIndex});
    };

    _remove = evt => {
        this.props.removeColumn(this.props.columnIndex)
    };

    render() {
        const {name, cards} = this.props;
        return (
            <ColumnBlock onDragOver={this._dragOver} onDrop={this._onDrop}>
                <ColumnName draggable onDragStart={this._drag}>
                    {name}
                    <span onClick={this._remove} style={{cursor: "pointer"}}>X</span>
                </ColumnName>
                {cards.map((card, idx) =>
                    <Card
                        key={card + idx}
                        name={card}
                        columnIndex={this.props.columnIndex}
                        cardIndex={idx}
                        dragStart={this.props.dragStart}
                        dragFinish={this.props.dragFinish}
                    />
                )}
                <CardInput placeholder="Add card..." onKeyPress={this._onKeyPress}/>
            </ColumnBlock>
        )
    }

}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;