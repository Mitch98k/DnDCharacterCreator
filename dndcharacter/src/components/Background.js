import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Common.css';

function Background() {
    const { id } = useParams();
    const { push } = useHistory();

    return (
        <div></div>
    );
};

export default Background;