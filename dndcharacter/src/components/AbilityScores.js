import React, {useReducer, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

const initialState = {
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

function AbilityScores() {
    const { push } = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleChange = (e)=> {
        dispatch({ field: e.target.name, value: e.target.value });
    }

    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = state;

    return (
        <div>
            <header>
                <h1>Set your Ability Scores</h1>
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