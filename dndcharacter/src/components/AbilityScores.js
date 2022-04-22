import React, {useReducer, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import '../css/Common.css';
import '../css/AbilityScores.css';

const initialState = {
    strength: '8',
    dexterity: '8',
    constitution: '8',
    intelligence: '8',
    wisdom: '8',
    charisma: '8',
}

let points = 27;

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

function AbilityScores() {
    const { push } = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = state;

    const handleChange = (e)=> {
        let prevValue = parseInt(state[e.target.name]);
        let currValue = parseInt(e.target.value);
        if (points > 0 || prevValue > currValue) {
            dispatch({ field: e.target.name, value: e.target.value });
            if (currValue < 14 && prevValue < 14) {
                prevValue < currValue ? points -= 1 : points += 1;
            } else {
                prevValue < currValue ? points -= 2 : points += 2;
            }
        } 
    }

    return (
        <div>
            <header className="selection-header" style={{backgroundColor: 'orange'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>Set your Ability Scores</h1>
                <progress value='5' max='8'/>
            </header>
            <section className="section">
                <div className="points">
                    <h2>points: {points}</h2>
                </div>
            </section>
            <body className="ability-body">
                <label htmlFor='strength' className='label'>
                    Strength
                <input name='strength' type='number' min='8' max='15' className='input' value={strength} onChange={handleChange}/>
                </label>
                <label htmlFor='dexterity' className='label'>
                    Dexterity
                <input name='dexterity' type='number' min='8' max='15' className='input' value={dexterity} onChange={handleChange}/>
                </label>
                <label htmlFor='constitution' className='label'>
                    Constitution
                <input name='constitution' type='number' min='8' max='15' className='input' value={constitution} onChange={handleChange}/>
                </label>
                <label htmlFor='intelligence' className='label'>
                    Intelligence
                <input name='intelligence' type='number' min='8' max='15' className='input' value={intelligence} onChange={handleChange}/>
                </label>
                <label htmlFor='wisdom' className='label'>
                    Wisdom
                <input name='wisdom' type='number' min='8' max='15' className='input' value={wisdom} onChange={handleChange}/>
                </label>
                <label htmlFor='charisma' className='label'>
                    Charisma
                <input name='charisma' type='number' min='8' max='15' className='input' value={charisma} onChange={handleChange}/>
                </label>
            </body>
            <footer>
                <button className='btn'>Submit</button>
            </footer>
        </div>
    );
};

export default AbilityScores;