import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Feature = ({ item }) => {
    const { serviceId } = useParams();

    const obj = [
        {
            id: 1,
            name: "Hospital Rooms & Services",
            description: "Good Health  Hospital offers a diverse range of quality accommodation from suites to single rooms, 2-bedded and 4-bedded rooms.",
            briefDescription: "The High Dependency Unit (HDU), or step-down, progressive and intermediate care unit, is for patients who require a higher level of observation, treatment and nursing care than that offered in a general ward but do not require admission into intensive care.For those moved into the HDU from the intensive care facilities, this move is often seen as a welcome sign of progress as it is means that the patient is improving, gradually establishing more normal eating and sleeping patterns, and is a step closer to going home.",
            img: "https://i.ibb.co/k32TpPg/hospital-2.jpg"
        },
        {
            id: 2,
            name: "Maternity Wards",
            description: "Our range of well-appointed and comfortable maternity rooms are specially designed to meet your birthing needs.",
            briefDescription: "The Neonatal Intensive Care Unit (NICU) specialises in the monitoring and care of ill or premature new-born infants. The NICU also admits babies with congenital problems or trauma during delivery and combines sophisticated equipment with trained healthcare professionals to provide specialised care for newborn infants.",
            img: "https://i.ibb.co/zfgnGzT/hospital-3.jpg"
        },
        {
            id: 3,
            name: "Accident & Emergency",
            price: "150",
            description: "Call our 24-hour A&E Helpline +6731 2218 (Orch) and +6569 100 (Nova) for immediate attention to medical emergencies.",
            briefDescription: "At GHHospital, we recognise that visits from friends and loved ones greatly aid the recovery process. However, to ensure that you and other patients have adequate time to rest and recover, we request that our visitor guidelines are strictly adhered to.",
            img: "https://i.ibb.co/7NTyrTS/hospital-4.jpg"
        },
        {
            id: 4,
            name: "Intensive Care Unit",
            description: "The Intensive Care Unit (ICU) is positioned in close proximity to operating theatres and catered for those who require intensive monitoring, nursing care and complex respiratory support.",
            briefDescription: "With a ceiling-mounted service unit to deliver critical power and house medical equipment, the beds in our ICU are no longer tethered to the wall. This allows the beds to be rotated and positioned freely to the most optimum environment. The ICU is also positioned in close proximity to the operating theatres so patients can receive emergency treatment as quickly as possible.",
            img: "https://i.ibb.co/0jWJSRJ/hospital-5.jpg"
        },
        {
            id: 5,
            name: "Operating Theatre",
            price: "100",
            description: "Our operating theatres are optimised for performing complex surgical operations, featuring sophisticated equipment such as positive pressure rooms and ceiling-mounted equipment.",
            briefDescription: "Our operating theatres are designed for optimal efficiency, and facilitate a seamless operational flow for performing complex surgical operations.     Every one of our operating rooms is equipped with sophisticated equipment ??? from positive pressure rooms and ceiling-mounted equipment units to advancements in surgical technology for strong performance. To reduce the risk of infection, all units operate with single-use surgical devices only.",
            img: "https://i.ibb.co/TbSZG0w/hospital-6.jpg"
        },
        {
            id: 6,
            name: "Radiology & Imaging Service",
            description: "Our radiology specialists provide diagnostic imaging reports to assist your doctor in making the most informed decisions for your treatment.",
            briefDescription: "Depending on your symptoms, your doctor will arrange tests that aid in the diagnosis of your condition and to better understand what is going on inside your body. These tests can be conducted using various imaging technologies like x-ray, computed tomography (CT), magnetic resonance imaging (MRI), ultrasound, bone mineral densitometry (BMD), angiography, nuclear medicine and positron emission tomography (PET), and can include non-invasive cardiac tests like electrocardiogram (ECG) and echocardiogram.",
            img: "https://i.ibb.co/dBtsZQR/hospital-1.jpg"
        }
    ]

    // const objCreate = JSON.parse(JSON.stringify(obj));
    // console.log(objCreate);
    const singleItem = obj.find(item => item.id == serviceId);
    // console.log(singleItem.briefDescription);

    // useEffect(() => {
    //     fetch('../Feature/hospital.JSON')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    // const { name } = item;

    return (
        <div>
            <MDBCard style={{ maxWidth: '22rem', margin: '50px' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={singleItem.img} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{singleItem.name}</MDBCardTitle>
                    <MDBCardText>
                        {singleItem.briefDescription}
                    </MDBCardText>
                </MDBCardBody>
                <Link to={'/'}><MDBBtn>Home</MDBBtn></Link>
            </MDBCard>
        </div>
    );

}
export default Feature;