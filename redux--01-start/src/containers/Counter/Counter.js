import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/action'

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
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
                        {strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {  // this is the redux state
    return {
        ctr: state.ctr.counter,  // ctr will become a prop in this component
        storedResults: state.res.results
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAdd: () => dispatch({
            type: actionTypes.ADD,
            value: 5
        }),
        onSubtract: () => dispatch({
            type: actionTypes.SUBTRACT,
            value: 7
        }),
        onStoreResult: (result) => dispatch ({
            type: actionTypes.STORE_RESULT, result: result
        }),
        onDeleteResult: (id) => dispatch ({
            type: actionTypes.DELETE_RESULT,
            resultElId: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
// export default Counter;