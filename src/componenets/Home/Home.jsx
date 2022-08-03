import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{padding: '15px'}}>
            <h3>
                Welcome !
            </h3>
        </div>
    );
};

export default Home;