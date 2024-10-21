const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
    addToCart : (state,action) => {

    },
    removeToCart : (state,action) => {

    }    
    }
})

export const {addToCart,removeToCart} = cartSlice.actions
export default cartSlice.reducer