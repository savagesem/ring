import React, {Component} from 'react';
import {Viewport} from "./styled/viewport";

import {KanbanContainer} from "./container/KanbanContainer";

class App extends Component {
    render() {
        return (
            <Viewport>
                <KanbanContainer/>
            </Viewport>
        );
    }
}

export default App;
