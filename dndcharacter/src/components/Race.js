import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Common.css';
import '../css/Race.css';

function Race() {
    const { id } = useParams();
    const { push } = useHistory();

    const [name, setName] = useState('');
    const [abilities, setAbilities] = useState([]);
    const [age, setAge] = useState('');
    const [alignment, setAlignment] = useState('');
    const [languages, setLanguages] = useState('');
    const [size, setSize] = useState('');
    const [speed, setSpeed] = useState('');
    const [proficiencies, setProficiencies] = useState([]);
    const [choiceNum, setChoiceNum] = useState('');
    const [options, setOptions] = useState([]);
    const [subraces, setSubraces] = useState([]);
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${id}`)
        .then(res => {
            console.log(res.data);

            setName(res.data.name);
            setAbilities(res.data.ability_bonuses);
            setAge(res.data.age);
            setAlignment(res.data.alignment);
            setLanguages(res.data.language_desc);
            setSize(res.data.size_description);
            setSpeed(res.data.speed);
            setProficiencies(res.data.starting_proficiencies);
            res.data.starting_proficiency_options && 
            setChoiceNum(res.data.starting_proficiency_options.choose);
            res.data.starting_proficiency_options &&
            setOptions(res.data.starting_proficiency_options.from);
            setSubraces(res.data.subraces);
            res.data.traits &&
            setTraits(res.data.traits);
        })
        .catch(err => console.log(err));
    }, id);

    return (
        <div className='race'>
            <nav>
                <button onClick={() => push('/races')}>back to race list</button>
                <button onClick={() => push('/')} className='home-btn'>home</button>
            </nav>
            <header className='race-header'>
                <h1>{name}</h1>
                <div id='abilitiesDiv'>
                    {abilities.map(a => (
                        <h2 key={a.ability_score.index} id='scores'>{a.ability_score.name}: {a.bonus}</h2>
                    ))}
                </div>
            </header>
            <body className='race-body'>
                <h3>age:</h3>
                <p>{age}</p>
                <h3>alignment:</h3>
                <p>{alignment}</p>
                <h3>languages:</h3>
                <p>{languages}</p>
                <h3>size:</h3>
                <p>{size}</p>
                {/* {proficiencies.length > 0 && <h3>you are proficient in:</h3>}
                {proficiencies && proficiencies.map(p => (
                    <p>{p.name}</p>
                ))}
                {choiceNum > 0 && <h3>{proficiencies.length > 0 ? 'additionally,' : null} you can choose {choiceNum} {choiceNum > 1 ? 'proficiencies' : 'proficiency'} from the following:</h3>}
                {options.length > 0 && options.map(op => (
                    <p>{op.name}</p>
                ))} */}
                {traits.length > 0 && <h4>your traits include:</h4>}
                {traits.length > 0 && traits.map(t => (
                    <p>{t.name}</p>
                ))}
                <button className='btn' onClick={() => push('/classes')}>Choose this race</button>
            </body>
        </div>
    );
};
export default Race;