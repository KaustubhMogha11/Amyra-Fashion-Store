import * as actionTypes from '../constants/wishlistConstants';

export const wishReducer = (state = { wishItems: []}, action) => {
    console.log('Ha',    action.type);
    switch(action.type) {
        case actionTypes.ADD_TO_WISH:
            const item = action.payload;

            const existItem = state.wishItems.find(product => product.id === item.id);
            console.log(existItem)
            console.log(item);
            console.log(state.wishItems)

            if(existItem){
                return {
                    ...state, wishItems: state.wishItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                let a =  { ...state, wishItems: [...state.wishItems, item]}
                console.log(a)
                return a;
            }
        case actionTypes.REMOVE_FROM_WISH:
            console.log(state.wishItems)
            console.log(action.payload);
       
            let s =  {
                ...state, wishItems: state.wishItems.filter(product => product.id !== action.payload)
            }
            console.log(s);
            return s;

        default:
            return state;
    }
}