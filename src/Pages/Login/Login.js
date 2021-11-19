import { Button, CircularProgress, Container as div, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, googleSignIn, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert('hi');
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }

    return (
        <Container>
            Login
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic"
                    label="Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic"
                    type="password"
                    label="Password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />
                <Button
                    sx={{ width: '25%', m: 2 }}
                    type="submit"
                    variant="contained"
                >Login</Button>

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to='/register'
                >
                    <Button
                        sx={{ width: '25%', m: 2 }}
                        type="submit"
                        variant="contained"
                    >NEW?PLZ CLICK TO REGISTER</Button>
                </NavLink>
            </form>

            <Button
                sx={{ width: '25%', m: 2 }}
                onClick={handleGoogleSignIn}
                variant="contained">Google Sign In</Button>
        </Container>
    );
};

export default Login;