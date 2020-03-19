import React,{Component} from 'react';

class DreamDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {
                    this.props.dreamArray.map((dream,index) => {
                        return(
                            <div key={index}>
                                <p>Date: {dream.dreamDate}</p>
                                <p>How you slept: {dream.sleepSatisfaction}</p>
                                <p>Kind of dream: {dream.dreamType}</p>
                                <p>Dream: {dream.dreamStory}</p>
                                <p>Perceived Meaning: {dream.dreamMeaning}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default DreamDisplay;