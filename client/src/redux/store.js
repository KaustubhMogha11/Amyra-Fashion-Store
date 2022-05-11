import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { wishReducer } from './reducers/wishlistReducer';
import { cartReducer } from './reducers/cartReducer';
import {  getProductReducer, getProductDetailsReducer } from './reducers/productReducer';
import {
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
  } from "./reducers/userReducer";
const reducer = combineReducers({
    // cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
    wish: wishReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;