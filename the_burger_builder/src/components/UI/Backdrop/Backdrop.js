import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => {
    console.log(['Backdrop.js'],props);
    return (
        props.show ? <div className={styles.Backdrop}
        onClick ={props.clicked}></div> : null
    )
};

export default backdrop;    