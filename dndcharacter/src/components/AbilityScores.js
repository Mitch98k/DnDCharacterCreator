import React, {useReducer, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
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
    const [position, setPostition] = useState();

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

    const handleSubmit = () => {
        if (points > 0) {
          alert("You must apply all points to your Ability Scores");  
        } else {
            //push('/personality')
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
                <footer>
                    <button onClick={handleSubmit}>Submit</button>
                </footer>
               </>
    } else if (page === 2) {
        body = <>
                <body className="ability-body2">
                    <div className="column1">
                        <label htmlFor='strength' className='ablName'>
                            Strength
                            <div className='optContainer' id="strength" value={strength}></div>
                        </label>
                        <label htmlFor='dexterity' className='ablName'>
                            Dexterity
                            <div className='optContainer' id="dexterity" value={dexterity}></div>
                        </label>
                        <label htmlFor='constitution' className='ablName'>
                            Constitution
                            <div className='optContainer' id="constitution" value={constitution}></div>
                        </label>
                        <label htmlFor='intelligence' className='ablName'>
                            Intelligence
                            <div className='optContainer' id="intelligence" value={intelligence}></div>
                        </label>
                        <label htmlFor='wisdom' className='ablName'>
                            Wisdom
                            <div className='optContainer' id="wisdom" value={wisdom}></div>
                        </label>
                        <label htmlFor='charisma' className='ablName'>
                            Charisma
                            <div className='optContainer' id="charisma" value={charisma}></div>
                        </label>
                    </div>
                    <div className="column 2">
                        <p className='num' id="15">15</p>
                        <p className='num' id="14">14</p>
                        <p className='num' id="13">13</p>
                        <p className='num' id="12">12</p>
                        <p className='num' id="10">10</p>
                        <p className='num' id="8">8</p>
                    </div>
                </body>
               </>
    } else {
        body = <>
            <body className="ability-body2">
                <h1>Roll for stats</h1>
                <button>Roll</button>
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
            <DndProvider backend={HTML5Backend}>
            {body}
            </DndProvider>
        </>
    );
};

export default AbilityScores;