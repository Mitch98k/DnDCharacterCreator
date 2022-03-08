import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function Alignment() {
    const { id } = useParams();
    const { push } = useHistory();

    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/alignments/${id}`)
        .then(res => {
            console.log(res);
            setDescription(res.data.desc);
        })
        .catch(err => {
            console.log(err);
        });
    }, id);
    return (
        <div>
            <nav>
                <button onClick={() => push('/alignments')}>back to alignments</button>
                <button onClick={() => push('/')} className='home-btn'>home</button>
            </nav>
            <header>
                <h1>{id}</h1>
            </header>
            <body>
                <p>{description}</p>
                <button className='btn'>Choose this alignment</button>
            </body>
        </div>
    );
};

export default Alignment;