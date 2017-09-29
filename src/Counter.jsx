import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';

const initialState = { count : 0 };

const myReducer = function(state = initialState, action) {
    switch (action.type) {
        case 'INC' : return Object.assign({}, state, { count: state.count + 1 });
        case 'DEC' : return Object.assign({}, state, { count: state.count - 1 });
        default : return state;
    }
};


const reducers = combineReducers({
    myReducer: myReducer
});


export const store = createStore(myReducer);

const incrementAction = { type: 'INC', amount : 1 };
const decrementAction = { type: 'DEC', amount : 1 };

class Counter extends React.Component {
    constructor() {
        super();
    }

    increment() {
        store.dispatch(incrementAction);
    }

    decrement() {
        store.dispatch(decrementAction);
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement.bind(this)}>-</button>
                <h2>{this.props.count}</h2>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        count: store.count
    }
};
export default connect(mapStateToProps)(Counter);