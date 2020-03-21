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
                sleepSatisfaction: this.state.sleepSatisfaction,
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
                sleepSatisfaction: '',
                dreamType: '',
                dreamStory: '',
                dreamMeaning: '',
            }
        );

    }

    changeAllInputs = (event) => {
        if (event.target.name === 'dreamDate') {
            this.setState({ dreamDate: event.target.value })
        
        } else if (event.target.name === 'dreamType') {
            this.setState({ dreamType: event.target.value })
        } else if (event.target.name === 'dreamStory') {
            this.setState({ dreamStory: event.target.value })
        } else if (event.target.name === 'dreamMeaning') {
            this.setState({ dreamMeaning: event.target.value })
        }
    }

    snugAsAbug = (event) =>{
        event.preventDefault();

        this.setState(
        {
            sleepSatisfaction: 'Snug as a bug in a rug'
        }
        )
        console.log(`Snug ${this.state.sleepSatisfaction}`)
    }

    nope = (event) =>{
        event.preventDefault();

        this.setState(
            {
                sleepSatisfaction: 'Terribly'
            }
        )
    }

    render() {
        return (
            <div >
                <form action=""  >
                    <h1>DREAMS</h1>
                    <div>
                        <input type="date" value={this.state.dreamDate} name='dreamDate' onChange={this.changeAllInputs} className='input' />
                    </div>
                    <div>
                        {/* HOW TO ADD VALUE AND NAME WHERE IT CAN REFERENCE EITHER BUTTON */}
                        <p>Did You Sleep Well?</p>
                        <button className='input' name='snug' onClick={this.snugAsAbug}>Snug As A Bug In A Rug!</button>
                        <button className='input' name='nope' onClick={this.nope}>What Is This Sleep You Speak Of?</button>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="dreamType">What Kind Of Dream</label>
                        <br />
                        <br />

                        <select name="dreamType" id="dreamType" value={this.state.dreamKind} name='dreamType' onChange={this.changeAllInputs} className='input' >
                            <option >--DREAM--</option>
                            <option value="DayDream">Day Dream</option>
                            <option value="Lucid">Lucid</option>
                            <option value="Nightmare">Nightmare</option>
                            <option value="Recurring">Recurring</option>
                            <option value="Healing">Healing</option>
                            <option value="Prophetic">Prophetic</option>
                            <option value="Signal">Signal</option>
                            <option value="Epic">Epic</option>
                        </select>
                    </div>
                    <br />

                    <div>
                        <label htmlFor="dreamText">So Spill It! What Happened?</label>
                        <br />
                        

                        <textarea name="dreamText" id="dreamText" cols="30" rows="8" value={this.state.dreamStory} name='dreamStory' onChange={this.changeAllInputs} className='input' ></textarea>
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="dreamMeaning">What Do You Think It All Means?</label>
                        <br />
                        <textarea name="dreamMeaning" id="dreamMeaning" cols="30" rows="8" value={this.state.dreamMeaning} name='dreamMeaning' onChange={this.changeAllInputs} className='input' ></textarea>
                    </div>
                    <br />

                    <div>
                        {/* <button onClick={this.dreamSubmission} className='input' >DreamCatcher</button> */}

                        <input type="image" id='image' alt='submit' src='https://images-na.ssl-images-amazon.com/images/I/61XQud6%2B8KL.jpg' onClick={this.dreamSubmission} className='dreamCatcher'/>
                    </div>

                </form>



            </div>
        );
    }
}

export default DreamForm;