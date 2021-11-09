import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function Race() {
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err));
    }, id);
    return (
        <p>this race is {id}</p>
    )
}
export default Race;