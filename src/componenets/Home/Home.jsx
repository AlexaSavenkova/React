import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{padding: '15px'}}>
            <h3>
                This is a home page
            </h3>
            <h4>Счетчик</h4>

            <button onClick={() => dispatch({type: 'minus'})}>-</button>
                &nbsp;
                {count}
                &nbsp;
            <button onClick={() => dispatch({type: 'plus'})}>+</button>
        </div>
    );
};

export default Home;