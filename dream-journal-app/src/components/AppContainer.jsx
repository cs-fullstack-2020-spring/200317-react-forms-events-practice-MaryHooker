import React, { Component } from 'react';
import DreamForm from './DreamForm';
import DreamDisplay from './DreamDisplay';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

                <div>
                    <DreamForm/>
                </div>

                <div>
                    <DreamDisplay/>
                </div>

            </div>
        );
    }
}

export default AppContainer;