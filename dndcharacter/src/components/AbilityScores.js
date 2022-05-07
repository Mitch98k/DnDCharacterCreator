import React, {useReducer, useEffect, useState} from "react";
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

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

function AbilityScores() {
    const { push } = useHistory();

    const [page, setPage] = useState(0);
    const [points, setPoints] = useState(27);

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = state;

    const changePage = () => {
        setPage(1);
    }

    const handleChange = (e) => {
        let prevValue = parseInt(state[e.target.name]);
        let currValue = parseInt(e.target.value);
        if (points > 0 || prevValue > currValue) {
            dispatch({ field: e.target.name, value: e.target.value });
            if (currValue < 14 && prevValue < 14) {
                prevValue < currValue ? setPoints(points - 1) : setPoints(points + 1);
            } else {
                prevValue < currValue ? setPoints(points - 2) : setPoints(points + 2);
            }
        } 
    }

    let body;

    if (page === 0) {
        body = <>
                <body className="selection-body">
                    <p>
                        Lorem ipsum dolor sit amet, cum dicant delicatissimi ex. Ne usu fabulas deserunt, an erant menandri atomorum duo, nam latine corrumpit in. Mei putent tractatos et, ut tation everti aliquam pri. His ut suas laboramus, stet nominavi ocurreret est an. Urbanitas percipitur no est, etiam graecis urbanitas per eu, ex mea labores feugait. Cu dicat tempor his, quem unum mea et, ei eum errem lucilius. Cum singulis lobortis adolescens te, in habeo sadipscing sed, reque dolorem vel ea.
                    </p>
                    <button onClick={changePage}>determine scores</button>
                </body>
                </>
    } else if (page === 1) {
        body = <>
                <section className="section">
                    <div className="points">
                        <h2>points: {points}</h2>
                    </div>
                </section>
                <body className="ability-body1">
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
               </>
    } else if (page === 2) {
        body = <>
                <body className="ability-body2">
                    <label htmlFor='strength' className='ablName'>
                        Strength
                        <div className='optContainer' value={strength}></div>
                    </label>
                    <label htmlFor='dexterity' className='ablName'>
                        Dexterity
                        <div className='optContainer' value={dexterity}></div>
                    </label>
                    <label htmlFor='constitution' className='ablName'>
                        Constitution
                        <div className='optContainer' value={constitution}></div>
                    </label>
                    <label htmlFor='intelligence' className='ablName'>
                        Intelligence
                        <div className='optContainer' value={intelligence}></div>
                    </label>
                    <label htmlFor='wisdom' className='ablName'>
                        Wisdom
                        <div className='optContainer' value={wisdom}></div>
                    </label>
                    <label htmlFor='charisma' className='ablName'>
                        Charisma
                        <div className='optContainer' value={charisma}></div>
                    </label>
                    <p className='num'>15</p>
                    <p className='num'>12</p>
                    <p className='num'>10</p>
                    <p className='num'>10</p>
                    <p className='num'>8</p>
                    <p className='num'>8</p>
                </body>
               </>
    }

    return (
        <>
            <header className="selection-header" style={{backgroundColor: 'orange'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>Set your Ability Scores</h1>
                <progress value='5' max='8'/>
            </header>
            <div className="">
                <button onClick={()=> setPage(1)}>Point System</button>
                <button onClick={()=> setPage(2)}>Preset Values</button>
                <button onClick={()=> setPage(3)}>Rolling</button>
            </div>
            {body}
        </>
    );
};

export default AbilityScores;