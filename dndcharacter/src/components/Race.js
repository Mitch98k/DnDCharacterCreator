import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function Race() {
    const { id } = useParams();

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
            setTraits(res.data.traits);
        })
        .catch(err => console.log(err));
    }, id);

    return (
        <div>
            <h1>{name}</h1>
            {abilities.map(a => (
                <h4 key={a.ability_score.index}>{a.ability_score.name}: {a.bonus}</h4>
            ))}
            <p>age: {age}</p>
            <p>alignment: {alignment}</p>
            <p>languages: {languages}</p>
            <p>size: {size}</p>
            <p>your speed is {speed}</p>
            {proficiencies.length > 0 && <h3>you are proficient in:</h3>}
            {proficiencies && proficiencies.map(p => (
                <p>{p.name}</p>
            ))}
            {choiceNum > 0 && <h3>additionally, you can choose {choiceNum} proficiencies from the following:</h3>}
            {options.length > 0 && options.map(op => (
                <p>{op.name}</p>
            ))}
        </div>
    )
}
export default Race;