import React, {Component} from 'react';
import PropTypes from "prop-types"

import {CardBlock} from "../styled/card";

const propTypes = {
    name: PropTypes.string,
    columnIndex: PropTypes.number,
    cardIndex: PropTypes.number,
    dragStart: PropTypes.func,
    dragFinish: PropTypes.func,
};

const defaultProps = {
    name: ""
};

export class Card extends Component {
    _drag = evt => {
        const {columnIndex, cardIndex} = this.props;
        console.log("card", columnIndex, cardIndex);
        this.props.dragStart({columnIndex, cardIndex});
    };

    render() {
        const {name} = this.props;
        return (
            <CardBlock draggable onDragStart={this._drag}>
                {name}
            </CardBlock>
        )
    }

}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;