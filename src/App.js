import React, { Component } from 'react';
import logo from './logo.svg';
import {Viewport} from "./styled/Viewport";
import {Column} from "./styled/Column";
import {Input} from "./styled/Input";
import './App.css';

const columns = [
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a"
];

class App extends Component {
  render() {
    return (
        <Viewport>
            {columns.map(col => <Column><Input placeholder="Add ..."/></Column>)}
        </Viewport>
    );
  }
}

export default App;
