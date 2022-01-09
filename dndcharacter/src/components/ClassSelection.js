import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function ClassSelection() {
    const {push} = useHistory();

    const [classes, setClasses] = useState([]);
    const [charClass, setCharClass] = useState();

    return (
        <div>
            <h1>select your class</h1>
        </div>
    );
}

export default ClassSelection;