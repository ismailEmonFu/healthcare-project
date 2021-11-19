import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

const ExpertiseDetail = ({ item }) => {
    return (
        <div>
            <MDBCard style={{ width: '18rem' }}>
                <MDBCardImage src={item.img} alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardText>
                        {item.description}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default ExpertiseDetail;