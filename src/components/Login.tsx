import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from './AuthProvider';


// eslint-disable-next-line react/prop-types
function Login() {
    const { login } = useAuth();
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    console.log(test);

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        login(loginData);
        navigate('/profile');
    };


    useEffect(() => {

    }, [navigate]);

    return (
        <div className="Login-header">
            <form className="Login-form" onSubmit={submit}>
                <input onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} name="Benutzername" type="text" placeholder='username'></input>
                <input onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} name="Password" type="password" placeholder='password'></input>
                <input type='submit' value="Login"></input>
            </form>
        </div>
    );
}

export default Login;


