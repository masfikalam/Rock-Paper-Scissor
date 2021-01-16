import React, { useContext, useState } from 'react';
import { UserContext } from '../App';

const Login = () => {
    const [, setLoggedUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [message, setMessage] = useState('');

    // users database
    let users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        localStorage.setItem('users', JSON.stringify([]));
    }
    
    // handling user toggle
    const handleUser = () => {
        const form = document.getElementById('loginForm');
        form.reset();
        setNewUser(!newUser);
        setMessage('');
    }
    
    // signup form
    const signup = (e) => {
        setMessage('');
        e.preventDefault();
        
        const form = document.getElementById('loginForm');
        const data = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
            id: Math.floor(Math.random() * 100)
        }
        if (!users.find(user => user.email === data.email)) {
            const allUsers = [...users, data];
            localStorage.setItem('users', JSON.stringify(allUsers));
            setMessage('Account created!');
            setLoggedUser(data);
        } else {                
            setMessage('User already exists!');
        }
        form.reset();
    }

    // login form
    const login = (e) => {
        setMessage('');
        e.preventDefault();

        const form = document.getElementById('loginForm');
        const data = {
            email: form.email.value,
            password: form.password.value
        }
        if (users.find(user => user.email === data.email)) {
            const userData = users.find(user => user.email === data.email);
            if (userData.password === data.password) {
                setMessage('Login successful!');
                setLoggedUser(userData);
            } else {
                setMessage('Incorrent Password!');
            }
        } else {                
            setMessage('User not found!');
        }
        form.reset();
    }

    return (
        <section id="login" className="py-5 text-center">
            <form id="loginForm" onSubmit={newUser ? signup : login}>
                <h3 className="my-4 text-white"><b>{newUser ? 'Sign Up' : 'Login'}</b></h3>
                <h6 className="text-center mt-3">{message}</h6>
                {
                    newUser &&
                    <input className="form-control my-2" name="username" type="text" placeholder="User Name" required />
                }
                <input className="form-control my-3" name="email" type="email" placeholder="Your Email" required />
                <input className="form-control" name="password" type="password" placeholder="Your Password" required />
                {
                    newUser &&
                    <div className="d-flex mt-3">
                        <input id="terms" className="mr-2" type="checkbox" required />
                        <label htmlFor="terms" className="m-0">I agree to terms and conditions</label>
                    </div>
                }
                <button className="btn mt-3" type="submit">{ newUser ? 'Sign Up' : 'Login' }</button>

                <span className="d-block w-75 mx-auto btn mt-4" onClick={handleUser}>
                    <b>{ newUser ? 'I have an account' : 'I am new here' }</b>
                </span>
            </form>
        </section>
    );
};

export default Login;