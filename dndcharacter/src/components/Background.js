import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Common.css';

function Background() {
    const { id } = useParams();
    const { push } = useHistory();

    const [description, setDescription] = useState([]);

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/backgrounds/${id}`)
        .then(res => {
            console.log(res);
            setDescription(res.data.feature.desc);
        })
        .catch(err => {
            console.log(err);
        })
    }, id);

    return (
        <div>
            <nav>
                <button onClick={() => push('/backgrounds')}>back to backgrounds</button>
                <button onClick={() => push('/')} className='home-btn'>home</button>
            </nav>
            <header>
                <h1>{id}</h1>
            </header>
            <body>
                <div>
                    {description.map(d => (
                        <p>{d}</p>
                    ))}
                </div>
                <button className='btn'>Choose this background</button>
            </body>
        </div>
    );
};

export default Background;