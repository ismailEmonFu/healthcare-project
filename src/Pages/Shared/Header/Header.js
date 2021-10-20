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
                            <Nav.Link href="/features">Features</Nav.Link>
                            <Nav.Link href="/facilities">Facilities</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;