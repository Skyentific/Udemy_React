import React from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [styles.SideDrawer, styles.Close]
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <div className={styles.Logo}><Logo/></div>
                    <nav>
                        <NavigationItems isAuthenticated={props.isAuth}/>
                    </nav>
                </div>
        </>
    )
};

export default sideDrawer;