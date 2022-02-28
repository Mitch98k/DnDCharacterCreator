import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function BackgroundSelection() {
    const { push } = useHistory();

    const [backgrounds, setBackgrounds] = useState([]);
    const [background, setBackground] = useState();

    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/backgrounds')
        .then(res => {
            console.log(res);
            setBackgrounds(res.data.results);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <header className="selection-header" style={{ backgroundColor: 'crimson'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>select your background</h1>
                <progress value='3' max='8'/>
            </header>
            <body className='selection-body'>
                {backgrounds.map(b => (
                    <div>
                        <div className={background===b.name ? "selected" : "card"} key={b.name} onClick={() => setBackground(b.name)}>
                            <h2>{b.name}</h2>
                        </div>
                        <p onClick={() => push(`/backgrounds/${b.index}`)}>more info</p>
                    </div>
                ))}
            </body>
            <footer>
                <button className='btn'>submit</button>
            </footer>
        </div>
    );
};

export default BackgroundSelection;
