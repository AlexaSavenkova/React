import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Page is not found 404</h3>
            <Link to = {'/'}>To the homepage</Link>
        </div>
    );
};

export default NotFound;