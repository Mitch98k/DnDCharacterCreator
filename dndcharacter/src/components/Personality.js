import React, { useReducer, useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../css/Common.css';
import '../css/Personality.css';

const initialState = {
    name: '',
    sex: '',
    feet: '',
    inches: '',
    pounds: '',
    age: '',
    hair: '',
    eye: '',
    skin: '',
    traitOne: '',
    traitTwo: '',
    ideal: '',
    bond: '',
    flaw: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

function Personality() {
    const { push } = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);

    const { name, sex, feet, inches, pounds, age, hair, eye, skin, traitOne, traitTwo, ideal, bond, flaw } = state;

    const handleChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value });
    }

    const handleSubmit = () => {
        push()
    }

    return ( 
    <>
        <header className="personality-header" style={{backgroundColor: 'purple'}}>
            <button onClick={() => push('/')} className='home-btn'>Home</button>
            <h1 style={{textAlign: 'center'}}>Determine<br />  your<br /> Personality</h1>
            <progress value='6' max='8'/>
        </header>
        <body>
            <form class='personality'>
                <div>
                    <label htmlFor='name'>Name&nbsp;
                        <input name='name' type='text' value={name} onChange={handleChange}/>
                    </label>
                    <label htmlFor='sex'>Sex&nbsp;
                        <select name='sex' value={sex} onChange={handleChange}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </label>
                    <h4>Height</h4>
                    <label htmlFor='feet'>
                        <input name='feet' type='number' min='1' max='9' value={feet} onChange={handleChange}/> 
                        &nbsp;Feet</label>
                    <label htmlFor='inches'>
                        <input name='inches' type='number' min='0' max='11' value={inches} onChange={handleChange}/>
                        &nbsp;Inches</label>
                    <h4>Weight</h4>
                    <label htmlFor='pounds'>
                        <input name='pounds' type='number' min='35' max='999' value={pounds} onChange={handleChange}/>
                        &nbsp;lb.</label>
                    <label htmlFor='age'>Age &nbsp;
                        <input name='age' type='number' min='1' max='1000' value={age} onChange={handleChange}/>
                    </label>
                    <label htmlFor='hair'>Hair Color&nbsp;
                        <input name='hair' type='text' value={hair} onChange={handleChange}/>
                    </label>
                    <label htmlFor='eye'>Eye Color&nbsp;
                        <input name='eye' type='text' value={eye} onChange={handleChange}/>
                    </label>
                    <label htmlFor='skin'>Skin Color&nbsp;
                        <input name='skin' type='text' value={skin} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <h4>Personality Traits</h4>
                    <label htmlFor='trait1'>First Trait&nbsp;
                        <textarea name='trait1' value={traitOne} onChange={handleChange}/>
                    </label>
                    <label htmlFor='trait2'>Second Trait&nbsp;
                        <textarea name='trait2' value={traitTwo} onChange={handleChange}/>
                    </label>
                    <h4>Ideal</h4>
                    <label htmlFor='ideal'>
                        <textarea name='ideal' value={ideal} onChange={handleChange}/>
                    </label>
                    <h4>Bond</h4>
                    <label htmlFor='bond'>
                        <textarea name='bond' value={bond} onChange={handleChange}/>
                    </label>
                    <h4>Flaw</h4>
                    <label htmlFor='flaw'>
                        <textarea name='flaw' value={flaw} onChange={handleChange}/>
                    </label>
                </div>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </body>
    </>
)};

export default Personality;