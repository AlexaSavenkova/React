import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../redux/reducers/userReducer/userSelector";
import {logoutInitiate} from "../../redux/reducers/userReducer/userReducer";

const Profile = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutInitiate())
    }

    return (
        <div>
            <h3>
                Profile
            </h3>
            {user && (<>
                <h4>
                    Hello {user.displayName}
                </h4>
                <button onClick={logout}>Log Out</button>
                <br/>
            </>)}

            {!user && (<>
                <NavLink to={'/login'}>Login</NavLink>
                or
                <NavLink to={'/register'}>Register</NavLink>
            </>)}

        </div>


    );
};

export default Profile;