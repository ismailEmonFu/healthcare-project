import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Feature from '../Feature/Feature';


const Features = (props) => {
    const { id, price, name, description, img } = props.facility;

    return (
        <div className="featureCard">
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={img} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>
                        {description}
                    </MDBCardText>
                </MDBCardBody>
                <Link to={`/feature/${id}`}><MDBBtn>For More!</MDBBtn></Link>
            </MDBCard>
            {/* <Feature facility={props.facility}></Feature> */}
        </div>
    );
};

export default Features;