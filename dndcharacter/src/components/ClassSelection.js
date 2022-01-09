import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';
import '../css/ClassSelection.css';

function ClassSelection() {
    const {push} = useHistory();

    const [classes, setClasses] = useState([]);
    const [charClass, setCharClass] = useState();

    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/classes')
        .then(res => {
            console.log(res);
            setClasses(res.data.results);
        })
        .catch(err => {
            console.log(err)
        });
    },[]);

    return (
        <div>
            <header className="selection-header" style={{ backgroundColor: 'navy'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>select your class</h1>
                <progress value='2' max='8'/>
            </header>
            <body className="selection-body">
                {classes.map(c => (
                    <div>
                        <div className="card" key={c.name}>
                            <h2>{c.name}</h2>
                        </div>
                        <p>more info</p>
                    </div>
                ))}
            </body>
        </div>
    );
}

export default ClassSelection;