const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
    addToCart : (state,action) => {
console.log(state,action);
state.cartItems.push(action.payload)
    },
    removeToCart : (state,action) => {
        console.log(state,action);
let copy = [...state.cartItems]
copy = copy.filter(item => item.id !== action.payload)
state.cartItems = copy
return state
    }    
    }
})

export const {addToCart,removeToCart} = cartSlice.actions
export default cartSlice.reducer