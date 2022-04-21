import React, {useReducer, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import '../css/Common.css';

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
            <header>
                <h1>Set your Ability Scores</h1>
                <h3>points: {points}</h3>
            </header>
            <body>
                <label htmlFor='strength'>
                    Strength
                <input name='strength' type='number' min='8' max='15' value={strength} onChange={handleChange}/>
                </label>
                <label htmlFor='dexterity'>
                    Dexterity
                <input name='dexterity' type='number' min='8' max='15' value={dexterity} onChange={handleChange}/>
                </label>
                <label htmlFor='constitution'>
                    Constitution
                <input name='constitution' type='number' min='8' max='15' value={constitution} onChange={handleChange}/>
                </label>
                <label htmlFor='intelligence'>
                    Intelligence
                <input name='intelligence' type='number' min='8' max='15' value={intelligence} onChange={handleChange}/>
                </label>
                <label htmlFor='wisdom'>
                    Wisdom
                <input name='wisdom' type='number' min='8' max='15' value={wisdom} onChange={handleChange}/>
                </label>
                <label htmlFor='charisma'>
                    Charisma
                <input name='charisma' type='number' min='8' max='15' value={charisma} onChange={handleChange}/>
                </label>
            </body>
        </div>
    );
};

export default AbilityScores;