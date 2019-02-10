import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import axios from '../../axios-orders';

class BurgerBuilder extends Component {

    state = {
        purchasing:  false, // local UI state
        loading: false, // local UI state
        error: false // local UI state
    }

    updatePurchaseState = (ingredients) => {
       
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        // console.log(sum);
        
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinuedHandler = () => {
    
        this.props.history.push({ pathname: '/checkout' });
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded</p> : <Spinner />;
        if (this.props.ings) {
            
            burger =  (
                <>
                <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        ingredientAdded = {this.props.onIngredientAdded}
                        ingredientRemoved ={ this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable = {this.updatePurchaseState(this.props.ings)}
                        price = {this.props.price}
                        ordered = {this.purchaseHandler}/>
                </>
            );
            
            orderSummary = <OrderSummary 
                ingredients = {this.props.ings}
                totalPrice = {this.props.price}
                purchaseCancelled ={this.purchaseCancelHandler}
                purchaseContinued = {this.purchaseContinuedHandler}/>

        }

        if ( this.state.loading ) {
            orderSummary = <Spinner />
        }
        
        // console.log(disabledInfo);
        // console.log(this.state.totalPrice);
        return (
            <>
                <Modal 
                    show = {this.state.purchasing}
                    modalClosed = {this.purchaseCancelHandler}> 
                    {orderSummary}
                    
                </Modal>

               {burger}
            </>
        )
    }
}


//REDUX

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));