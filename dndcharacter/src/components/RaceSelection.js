import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';
import '../css/RaceSelection.css';

function RaceSelection() {
    const { push } = useHistory();

    const [races, setRaces] = useState([]);
    const [race, setRace] = useState();

    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/races')
        .then(res => {
            setRaces(res.data.results);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="races">
          <header className="selection-header" style={{ backgroundColor: 'forestgreen' }}>
            <button onClick={() => push('/')} className='home-btn'>Home</button>
            <h1>select your race</h1>
            <progress value='1' max='8'/>
          </header>
          <body className = "selection-body">
            {races.map(r => (
              <div>
                <div className={race===r.name ? "selected" : "card"}key={r.name} onClick={() => setRace(r.name)}>
                  <h2>{r.name}</h2>
                </div>
                <p onClick={() => push(`/races/${r.index}`)}>more info</p>
              </div>
            ))}
          </body>
          <footer>
            <button className='btn' onClick={() => push('/classes')}>Submit</button>
          </footer>
        </div>
    );
};

export default RaceSelection;