import * as actionTypes from '../constants/wishlistConstants';
import axios from 'axios';

export const addToWish = (id, quantity) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_WISH, payload: { ...data, quantity } });

        localStorage.setItem('wish', JSON.stringify(getState().wish.wishItems))
    } catch (error) {
        console.log('Error while calling wish API');
    }
};
export const removeFromWish = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_WISH,
        payload: id
    })

    localStorage.setItem('wish', JSON.stringify(getState().wish.wishItems));
};
