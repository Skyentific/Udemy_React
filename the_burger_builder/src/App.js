import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// import Orders from './containers/Orders/Orders';
// import Checkout from './containers/Checkout/Checkout'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';



// async Components
const asyncCheckout = asyncComponent(() => {
  return import ('./containers/Checkout/Checkout')
});

const asyncOrders = asyncComponent(() => {
  return import ('./containers/Orders/Orders')
});

const asyncAuth= asyncComponent(() => {
  return import ('./containers/Auth/Auth')
});



class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  };

  
  render() {

    // routes for unauthenticated users
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth}/>
        <Route path="/" component={BurgerBuilder}/>
        <Redirect to='/'/>
      </Switch>
    );

    // additional routes for authenticated users
    if (this.props.isAuthenticated) {
      routes = (
      <Switch>
        <Route path="/checkout" component={asyncCheckout}/>
        <Route path='/orders' component={asyncOrders}/>       
        <Route path='/logout' component={Logout}/>
        <Route path='/auth' component={asyncAuth}/>
        <Route path="/" component={BurgerBuilder}/>
        <Redirect to='/'/>
      </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
