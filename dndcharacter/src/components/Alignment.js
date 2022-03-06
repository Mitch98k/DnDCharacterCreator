import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function Alignment() {
    const { id } = useParams();
    const { push } = useHistory();

    return (
        <div>Alignment</div>
    );
};

export default Alignment;