import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:  false
    }

    updatePurchaseState = (ingredients) => {
       
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {

        // get a count of how many of each ingredient is currently in the burger
        const oldCount = this.state.ingredients[type];

        // ingrement the ingredient count
        const updatedCount = oldCount + 1;
        
        // make a copy of the ingredients in the state
        const updatedIngredients = {
            ...this.state.ingredients
        }
        
        // update the count of the relevant ingredient in the state
        updatedIngredients[type] = updatedCount;

        // work out the cost for the ingredient
        const priceAddition = INGREDIENT_PRICES[type];

        // get get the old burger price
        const oldPrice = this.state.totalPrice;
        
        // add the new ingredient price to the old price
        const newPrice = oldPrice + priceAddition;

        // update the state
        this.setState( {
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {

        // get a count of how many of each ingredient is currently in the burger
        const oldCount = this.state.ingredients[type];

        // escape if there are no ingredients of that type
        if (oldCount <= 0) {
            return;
        }
        // ingrement the ingredient count
        const updatedCount = oldCount - 1;
        
        // make a copy of the ingredients in the state
        const updatedIngredients = {
            ...this.state.ingredients
        }
        
        // update the count of the relevant ingredient in the state
        updatedIngredients[type] = updatedCount;

        // work out the cost for the ingredient
        const priceDeduction = INGREDIENT_PRICES[type];

        // get get the old burger price
        const oldPrice = this.state.totalPrice;
        
        // add the new ingredient price to the old price
        const newPrice = oldPrice - priceDeduction;

        // update the state
        this.setState( {
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })

        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinuedHandler = () => {
        // alert('You continue');
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Sarah York',
                address: {
                    street: 'Test street',
                    zipCode: '34345',
                    country: 'Australia',
                },
                email: 'test@email.com'
            },
            deliveryMethod: 'fastest'
        };

        // firebase needs .json
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // console.log(disabledInfo);
        // console.log(this.state.totalPrice);
        return (
            <>
                
                <Modal 
                    show = {this.state.purchasing}
                    modalClosed = {this.purchaseCancelHandler}> 
                    
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        totalPrice = {this.state.totalPrice}
                        purchaseCancelled ={this.purchaseCancelHandler}
                        purchaseContinued = {this.purchaseContinuedHandler}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved ={ this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}/>
            </>
        )
    }
}

export default BurgerBuilder;