import React from 'react';
import ExpertiseDetail from '../ExpertiseDetail/ExpertiseDetail';
import './Expertise.css';

const Expertise = () => {

    const obj = [
        {
            id: 1,
            description: "Screening And Diagnosis Recovery from heart disease comes in many forms, both pre- and post-surgery. Besides using medication to keep your heart condition under control",
            img: "https://www.mountelizabeth.com.sg/images/default-source/default-album/heart-screening-diagnosis.jpg"
        },
        {
            id: 2,
            description: "Spectrum of Treatment Our multidisciplinary team of medical specialists, nurses and therapists will guide you through the entire treatment and recovery process with care and professionalism",
            img: "https://www.mountelizabeth.com.sg/images/default-source/COE-heart/heart.jpg"
        },
        {
            id: 3,
            description: "Common Heart Conditions Our surgeons, cardio specialists and operating theatre nurses, are all experienced in treating a wide spectrum of heart conditions. Together with our support staff, including our radiographers",
            img: "https://www.mountelizabeth.com.sg/images/default-source/COE-heart/heart-conditions_v2.jpg"
        }
    ]



    return (
        <>
            <h2>Our Field Of Expertise Expertise</h2>
            <div className="expertise-container">
                {
                    obj.map(item => <ExpertiseDetail
                        key={item.id}
                        item={item}
                    ></ExpertiseDetail>)
                }
            </div>
        </>
    );
};

export default Expertise;