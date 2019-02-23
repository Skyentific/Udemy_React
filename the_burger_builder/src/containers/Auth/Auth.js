import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import styles from './Auth.module.css';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    };

    render () {

        const formElementsArray = [];
        
        for (let key in this.state.controls) {
                formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input 
                key = {formElement.id}
                elementType={formElement.config.elementType}
                elementConfig ={formElement.config.elementConfig}
                value={formElement.config.value} 
                touched = {formElement.config.touched}
                shouldValidate = {formElement.config.validation}
                invalid = {!formElement.config.valid}
                changed = {(event) => this.inputChangedHandler(event, formElement.id)}
            />
            
        ))

        return (
            <div className={styles.Auth}>
                <form>
                    {form}
                    <Button btnType="Success"> SUBMIT </Button>
                </form>
            </div>
        );
    }
}

export default Auth;