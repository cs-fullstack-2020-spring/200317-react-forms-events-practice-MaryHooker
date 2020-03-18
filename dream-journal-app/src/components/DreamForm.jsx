import React,{Component} from 'react';

class DreamForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dreamDate: '',
            sleepSatisfaction: '',
            dreamType: '',
            dreamStory: '',
            dreamMeaning: '',
         }
    }


    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset>
                        <legend>DREAMS</legend>
                        <div>
                            <input type="date" value={this.state.dreamDate} onChange={this.changeAllInputs}/>
                        </div>
                        <div>
                            <p>Did You Sleep Well?</p>
                            <button>Snug As A Bug In A Rug!</button>
                            <button>What Is This Sleep You Speak Of?</button>
                        </div>
                        <div>
                            <label htmlFor="dreamType">What Kind Of Dream</label>
                            <select name="dreamType" id="dreamType" value={this.state.dreamKind} onChange={this.changeAllInputs}>
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
                            <textarea name="dreamText" id="dreamText" cols="30" rows="10" value={this.state.dreamStory} onChange={this.changeAllInputs}></textarea>
                        </div>
                        <div>
                            <label htmlFor="dreamMeaning">What Do You Think It All Means?</label>
                            <textarea name="dreamMeaning" id="dreamMeaning" cols="30" rows="10" value={this.state.dreamMeaning} onChange={this.changeAllInputs}></textarea>
                        </div>
                        <div>
                        <button onClick={this.submitDream}>DreamCatcher</button>
                        </div>
                    </fieldset>
                </form>

            </div>
         );
    }
}
 
export default DreamForm;