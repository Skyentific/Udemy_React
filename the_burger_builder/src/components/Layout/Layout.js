import React, {Component} from 'react'
import styles from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  
    state ={
        showSideDrawer: true
    };

    sideDrawerClosedHandler =() => {
        this.setState({showSideDrawer: false})
    };

    render () {
        console.log(this.state.showSideDrawer);
        return (
        <>
            <Toolbar/>
            <SideDrawer 
                closed={this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer}/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </>
        )
    }
};

export default Layout;