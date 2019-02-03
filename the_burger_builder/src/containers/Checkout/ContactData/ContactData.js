import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
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

    render () {
        let form = (
            <form>
                <Input inputtype="input" type= "text" name="name" placeholder="Your Name"/>
                <Input inputtype="input" type= "text" name="email" placeholder="Your Email"/>
                <Input inputtype="input" type= "text" name="street" placeholder="Street"/>
                <Input inputtype="input" type= "text" name="postal" placeholder="Postal Code"/>
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