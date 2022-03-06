import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../css/Common.css';

function AlignmentSelection() {
    const { push } = useHistory();

    return (
        <div>Alignments</div>
    );
};

export default AlignmentSelection;