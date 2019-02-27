import React from 'react';
import User from '../../components/User';

const indexPage = () => (
    <div>
        <h1>The Auth index page</h1>
        <User 
            name="SKY"
            age={48}/>
    </div>
);

export default indexPage