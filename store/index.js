import { configureStore } from "@reduxjs/toolkit"
import cardReducer from '@/store/slices/cartslice'


const store = configureStore({
    reducer : {
        cart : cardReducer,
    }
})

export default store