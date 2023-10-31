import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Common.css';

function AlignmentSelection() {
    const { push } = useHistory();

    const [alignment, setAlignment] = useState();

    const alignList = [{name: 'Lawful Good', id: 'lawful-good'}, {name: 'Neutral Good', id: 'neutral-good'}, {name: 'Chaotic Good', id: 'chaotic-good'}, {name: 'Lawful Neutral', id: 'lawful-neutral'}, {name: 'True Neutral', id: 'neutral'}, {name: 'Chaotic Neutral', id: 'chaotic-neutral'}, {name: 'Lawful Evil', id: 'lawful-evil'}, {name: 'Neutral Evil', id: 'neutral-evil'}, {name: 'Chaotic Evil', id: 'chaotic-evil'}];

    return (
        <div>
            <header className='selection-header' style={{ backgroundColor: 'grey'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>select your alignment</h1>
                <progress value='4' max='8'/>
            </header>
            <body style={{display: 'flex', flexWrap: 'wrap', marginLeft: '15%', marginRight: '15%'}}>
                {alignList.map(all => (
                    <div>
                        <div className={alignment===all.name ? 'selected' : 'card'} key={all.name} onClick={() => setAlignment(all.name)}>
                            <h2>{all.name}</h2>
                        </div>
                        <p onClick={() => push(`/alignments/${all.id}`)}>more info</p>
                    </div>
                ))}
            </body>
            <footer>
                <button className='btn' onClick={() => push('/ability-scores')}>submit</button>
            </footer>
        </div>
    );
};

export default AlignmentSelection;