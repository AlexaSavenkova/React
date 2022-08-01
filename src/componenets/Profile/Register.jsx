import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../redux/reducers/userReducer/userSelector";
import {registerInitiate} from "../../redux/reducers/userReducer/userReducer";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/profile');
        }
    },[navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Name</label>
                <input type="text"
                       value = {displayName}
                       id = "displayName"
                       onChange={(e) => setDisplayName(e.target.value)}
                /><br/><br/>
                <label htmlFor="email">Email</label>
                <input type="text"
                       id = "email"
                       value = {email}
                       onChange={(e) => setEmail(e.target.value)}
                /><br/><br/>
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id = "password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/><br/>
                <label htmlFor="confirm-password">Confirm password</label>
                <input
                    type="text"
                    id = "confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /><br/><br/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default Register;