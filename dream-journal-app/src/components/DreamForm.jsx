import React, { Component } from 'react';

class DreamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dreamDate: '',
            sleepSatisfaction: '',
            dreamType: '',
            dreamStory: '',
            dreamMeaning: '',
            dreamArray: [],
        }
    }

    dreamSubmission = (event) => {
        event.preventDefault();

        this.state.dreamArray.push(
            {
                dreamDate: this.state.dreamDate,
                sleepSatisfaction:this.state.sleepSatisfaction,
                dreamType: this.state.dreamType,
                dreamStory: this.state.dreamStory,
                dreamMeaning: this.state.dreamMeaning,

            }

            
        )

        this.setState(
            {
                dreamArray: this.state.dreamArray
            }
        )

        console.log(this.state.dreamArray)

        this.props.updateDreamArray(this.state.dreamArray)

        this.setState(
            {
                dreamDate: '',
                sleepSatisfaction:'',
                dreamType: '',
                dreamStory: '',
                dreamMeaning: '',
            }
        );

    }

    changeAllInputs = (event) => {
        if (event.target.name === 'dreamDate') {
            this.setState({ dreamDate: event.target.value })
        } else if (event.target.name === 'sleepSatisfaction') {
            this.setState({ sleepSatisfaction: event.target.value })
        } else if (event.target.name === 'dreamType') {
            this.setState({ dreamType: event.target.value })
        } else if (event.target.name === 'dreamStory') {
            this.setState({ dreamStory: event.target.value })
        } else if (event.target.name === 'dreamMeaning') {
            this.setState({ dreamMeaning: event.target.value })
        }
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>DREAMS</legend>
                        <div>
                            <input type="date" value={this.state.dreamDate} name='dreamDate' onChange={this.changeAllInputs} />
                        </div>
                        <div>
                            {/* HOW TO ADD VALUE AND NAME WHERE IT CAN REFERENCE EITHER BUTTON */}
                            <p>Did You Sleep Well?</p>
                            <button>Snug As A Bug In A Rug!</button>
                            <button>What Is This Sleep You Speak Of?</button>
                        </div>
                        <div>
                            <label htmlFor="dreamType">What Kind Of Dream</label>
                            <select name="dreamType" id="dreamType" value={this.state.dreamKind} name='dreamType' onChange={this.changeAllInputs}>
                                <option >--DREAM--</option>
                                <option value="dayDream">Day Dream</option>
                                <option value="lucid">Lucid</option>
                                <option value="nightmare">Nightmare</option>
                                <option value="recurring">Recurring</option>
                                <option value="healing">Healing</option>
                                <option value="prophetic">Prophetic</option>
                                <option value="signal">Signal</option>
                                <option value="epic">Epic</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dreamText">So Spill It! What Happened?</label>
                            <textarea name="dreamText" id="dreamText" cols="30" rows="10" value={this.state.dreamStory} name='dreamStory' onChange={this.changeAllInputs}></textarea>
                        </div>
                        <div>
                            <label htmlFor="dreamMeaning">What Do You Think It All Means?</label>
                            <textarea name="dreamMeaning" id="dreamMeaning" cols="30" rows="10" value={this.state.dreamMeaning} name='dreamMeaning' onChange={this.changeAllInputs}></textarea>
                        </div>
                        <div>
                            <button onClick={this.dreamSubmission}>DreamCatcher</button>
                        </div>
                    </fieldset>
                </form>

            </div>
        );
    }
}

export default DreamForm;