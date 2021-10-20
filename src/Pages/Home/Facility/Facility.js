import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Facility = () => {
    const [facilities, setFacilities] = useState();
    useEffect(() => {
        fetch('./hospital.JSON')
            .then(res => res.json())
            .then(data => setFacilities(data));
    }, [])
    return (
        <div>
            <h2>Our Super Facility</h2>
            <div>
                {
                    facilities.map(facility => {
                        <div>
                            <img src={facility.img} alt="" />
                            <h3>{facility.name}</h3>
                            <p className="px-3">{facility.description}</p>
                            <Link to={`/features/${facility.id}`}>
                                <button className="btn btn-info">Take {facility.name} Service</button>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Facility;