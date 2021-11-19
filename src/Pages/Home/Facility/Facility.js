import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';
import './Facility.css';

const Facility = () => {
    const [facilities, setFacilities] = useState([]);
    useEffect(() => {
        fetch('./hospital.JSON')
            .then(res => res.json())
            .then(data => setFacilities(data));
    }, [])
    return (
        <>
            <h2>We Have Super Facility</h2>
            <div className="feature-container">
                {
                    facilities?.map(facility => <Features key={facility.id} facility={facility}></Features>)
                }
            </div>
        </>
    );
};

export default Facility;