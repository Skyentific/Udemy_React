import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Streeet'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ],
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();  // stop the 'Order" button from sending a request
        console.log(this.props.ingredients);

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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
                this.setState({
                    loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false});
            });
    }

    // <Input elementType="..." elementConfig="..." value="..." />
    render () {

        const formElementsArray = [];
        
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        console.log(formElementsArray);

        let form = (
            <form>
    
                {formElementsArray.map(formElement => (
                    <Input 
                        elementType={formElement.config.elementType}
                        elementConfig ={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        key = {formElement.id}/>
                ))}
                <Button 
                    btnType="Success"
                    clicked={this.orderHandler}>Order</Button>
            </form>
        );
        
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className = {styles.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;