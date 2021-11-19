import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
import AdmissionGuide from '../AdmissionGuide/AdmissionGuide';
import Expertise from '../Expertise/Expertise';
import Facility from '../Facility/Facility';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <Expertise></Expertise>
            <AdmissionGuide></AdmissionGuide>
        </div>
    );
};

export default Home;