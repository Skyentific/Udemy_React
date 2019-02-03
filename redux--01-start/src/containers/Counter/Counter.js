import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }
    
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 7" clicked={this.props.onSubtract}  />
            </div>
        );
    }
}

const mapStateToProps = state => {  // this is the redux state
    return {
        ctr: state.counter  // ctr will become a prop in this component
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT'
        }),
        onDecrementCounter: () => dispatch({
            type: 'DECREMENT'
        }),
        onAdd: () => dispatch({
            type: 'ADD',
            value: 5
        }),
        onSubtract: () => dispatch({
            type: 'SUBTRACT',
            value: 7
        })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
// export default Counter;