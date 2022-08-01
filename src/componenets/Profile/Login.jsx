import React, {useEffect, useState} from 'react';
import {loginInitiate} from "../../redux/reducers/userReducer/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../redux/reducers/userReducer/userSelector";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/profile');
        }
    },[user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text"
                       id = "email"
                       value = {email}
                       onChange={(e) => setEmail(e.target.value)}
                /><br/><br/>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id = "password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/><br/>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default Login;