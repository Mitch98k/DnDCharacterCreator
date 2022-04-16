import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function AbilityScores() {
    const { push } = useHistory();

    const [scores, setScores] = useState({Str: null, Dex: null, Con: null, Int: null, Wis: null, Cha: null});
    // const [strength, setStrength] = useState();
    // const [dexterity, setDexterity] = useState();
    // const [constitution, setConstitution] = useState();
    // const [intelligence, setIntelligence] = useState();
    // const [wisdom, setWisdom] = useState();
    // const [charisma, setCharisma] = useState();

    const scoresArray = Object.entries(scores);
    console.log(scoresArray)
    return (
        <div>
            <header>
                <h1>Set your Ability Scores</h1>
            </header>
            <body>
                {scoresArray.map(score => (
                    <div>
                        <h3>{score[0]}</h3>
                        <input type='number' min='8' max='15' placeholder='8'></input>
                    </div>
                ))}
            </body>
        </div>
    );
};

export default AbilityScores;