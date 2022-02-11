import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Common.css';

function CharClass() {
    const { id } = useParams();
    const { push } = useHistory();

    const [name, setName] = useState('');
    const [die, setDie] = useState('');
    const [prof, setProf] = useState([]);
    const [throws, setThrows] = useState([]);

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/classes/${id}`)
        .then(res => {
            console.log(res);
            setName(res.data.index);
            setDie(res.data.hit_die);
            setProf(res.data.proficiencies);
            setThrows(res.data.saving_throws);
        })
        .catch(err => {
            console.log(err);
        });
    },[]);

    return (
        <div>
            <nav>
                <button onClick={() => push('/classes')}>back to class list</button>
                <button onClick={() => push('/')} className='home-btn'>home</button>
            </nav>
            <header>
                <h1>{name}</h1>
                <p>{`one d${die}`}</p>
            </header>
            <body>
                <h2>proficiencies:</h2>
                <div>
                    {prof.map(p => (
                        <h3>{p.name}</h3>
                    ))}
                </div>
                <h3>saving throws:</h3>
                <div>
                    {throws.map(t => (
                        <h4>{t.name}</h4>
                    ))}
                </div>
            </body>
        </div>
    )
}

export default CharClass;