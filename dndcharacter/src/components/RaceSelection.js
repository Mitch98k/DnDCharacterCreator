import React, {useState, useEffect} from "react";
import axios from "axios";
import '../css/Common.css';
import '../css/RaceSelection.css';

function RaceSelection() {
    const [races, setRaces] = useState([]);
    const [race, setRace] = useState("");

    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/races')
        .then(res => {
            setRaces(res.data.results);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="race">
          <header className="race-header">
            <h1>select your race</h1>
          </header>
          <body className = "race-body">
            {races.map(r => (
                <h2 key={r.index} className="races">{r.name}</h2>
            ))}
          </body>
        </div>
    );
}

export default RaceSelection;