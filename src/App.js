import React, {Component} from 'react';
import {Viewport} from "./styled/viewport";

import {KanbanContainer} from "./container/KanbanContainer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from "./reducers/reducer";

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Viewport>
                    <KanbanContainer/>
                </Viewport>
            </Provider>
        );
    }
}

export default App;
