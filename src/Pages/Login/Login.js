import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/facilities';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                {/* <form className="mt-3">
                    <input className="mb-3 rounded" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" className="mb-3 rounded" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form> */}

                <button
                    className="btn btn-info"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;