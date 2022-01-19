import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function BackgroundSelection() {
    const { push } = useHistory();

    return (
        <div>
            <h1>Backgrounds</h1>
        </div>
    )
}

export default BackgroundSelection;