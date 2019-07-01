import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            state = action.data;
            return state;
        default:
            return state
    }
}
let reducer2 = (state = [], action) => {
    switch (action.type) {
        case 'USER_ANS':
            state.push(action.data);
            return state;
        default:
            return state;
    }
}
let reducer3 = (state = [], action) => {
    console.log(state, action)
    switch (action.type) {
        case 'SAVE_LIST':
            state = action.list;
            return state;
        default:
            return state;
    }
}
let reducers = combineReducers({ reducer, reducer2, reducer3 })
let store = createStore(reducers, applyMiddleware(thunk))
window.store = store
export default store