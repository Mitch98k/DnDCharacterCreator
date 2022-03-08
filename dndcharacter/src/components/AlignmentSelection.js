import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function AlignmentSelection() {
    const { push } = useHistory();

    const [alignments, setAlignments] = useState([]);
    const [alignment, setAlignment] = useState();

    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/alignments')
        .then(res => {
            console.log(res);
            setAlignments(res.data.results);
        })
        .catch(err => {
            console.log(err);
        });
    });

    return (
        <div>
            <header className="selection-header" style={{ backgroundColor: 'grey'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>select your alignment</h1>
                <progress value='4' max='8'/>
            </header>
            <body className='selection-body'>
                {alignments.map(all => (
                    <div>
                        <div className={alignment===all.name ? "selected" : "card"} key={all.name} onClick={() => setAlignment(all.name)}>
                            <h2>{all.name}</h2>
                        </div>
                        <p onClick={() => push(`/alignments/${all.index}`)}>more info</p>
                    </div>
                ))}
            </body>
            <footer>
                <button className='btn'>submit</button>
            </footer>
        </div>
    );
};

export default AlignmentSelection;