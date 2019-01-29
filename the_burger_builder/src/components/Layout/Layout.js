import React from 'react'
import styles from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <>
        <Toolbar/>
        <SideDrawer/>
        <main className={styles.Content}>
            {props.children}
        </main>
    </>
);

export default layout;