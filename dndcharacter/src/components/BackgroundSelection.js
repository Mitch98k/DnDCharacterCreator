import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function BackgroundSelection() {
    const { push } = useHistory();

    return (
        <div>
            <header className="selection-header" style={{ backgroundColor: 'crimson'}}>
                <button onClick={() => push('/')} className='home-btn'>Home</button>
                <h1>select your background</h1>
                <progress value='2' max='8'/>
            </header>
        </div>
    );
};

export default BackgroundSelection;
