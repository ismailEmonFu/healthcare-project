import { Link } from 'react-router-dom';
import { Button, Container, Grid, TextField, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useAuth from '../../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData);
    }

    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("somethings wrong");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        // console.log(loginData);

        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h6" gutterBottom component="div">
                Register
            </Typography>
            <form onSubmit={handleRegisterSubmit}>
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic0"
                    label="Your Name"
                    name="name"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic0"
                    label="Your Email"
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic1"
                    type="password"
                    label="Your Password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic2"
                    type="password"
                    label="Confirm Your Password"
                    name="password2"
                    onChange={handleOnChange}
                    variant="standard" />
                <Button
                    sx={{ width: '75%', m: 2 }}
                    type="submit"
                    variant="outlined"
                >REGISTER</Button>

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to='/login'>
                    <Button
                        sx={{ width: '75%', m: 2 }}
                        type="submit"
                        variant="outlined"
                    >ALREADY REGISTERED? PLEASE LOGIN</Button>
                </NavLink>
            </form>
            <NavLink
                style={{ textDecoration: 'none' }}
                to='/'>
                <Button
                    sx={{ width: '75%', m: 2 }}
                    type="submit"
                    style={{ color: 'purple' }}
                    variant="outlined"
                >GO TO HOME</Button>
            </NavLink>
        </Container >
    );
};

export default Register;