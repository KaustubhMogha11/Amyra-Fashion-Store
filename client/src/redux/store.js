import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { wishReducer } from './reducers/wishlistReducer';
import { cartReducer } from './reducers/cartReducer';
import {  getProductReducer, getProductDetailsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    // cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
    wish: wishReducer

})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;