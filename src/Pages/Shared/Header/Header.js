import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    // // console.log(user.email);
    // const { user, logOut } = useAuth();
    const { logOut } = useAuth();

    return (
        <div>
            <Navbar bg="info" className="fixed-top" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Good Health Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/expertise">Expertise</Nav.Link>
                            <Nav.Link href="/admissionGuide">Admission Guide</Nav.Link>
                            <Nav.Link href="/facilities">Facilities</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut}>(Logout) {user?.displayName}</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;