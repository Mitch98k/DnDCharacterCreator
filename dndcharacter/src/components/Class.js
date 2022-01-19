import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Common.css';

function CharClass() {
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/classes/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    },[]);

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default CharClass;