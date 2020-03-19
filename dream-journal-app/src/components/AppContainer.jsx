import React, { Component } from 'react';
import DreamForm from './DreamForm';
import DreamDisplay from './DreamDisplay';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dreamArray: [],
        }
    }

    updateDreamArray = (updatedArray) => {
        this.setState({dreamArray : updatedArray})
    }
    render() {
        return (
            <div>

                <div>
                    <DreamForm updateDreamArray = {this.updateDreamArray}/>
                </div>

                <div>
                    <DreamDisplay dreamArray = {this.state.dreamArray}/>
                </div>

            </div>
        );
    }
}

export default AppContainer;