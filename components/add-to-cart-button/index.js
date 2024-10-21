"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeToCart } from "@/store/slices/cartslice";



function AddToCartButton({productItem}){
  
    const {cart} = useSelector(state => state)

    console.log(cart?.cart);

    const dispatch = useDispatch()


    function handleAddToCart(){
        dispatch(addToCart(productItem))
    }
    function handleRemoveCart(){
    dispatch(removeToCart(productItem?.id))
    }
    
    return (
        <div className="mt-8 max-w-md">
            <Button
            type="button"
            onClick={cart?.cartItem?.some(item => item.id === productItem.id) ? handleRemoveCart : handleAddToCart}
            >{
                cart?.cartItem?.some(item => item.id === productItem.id) ? "Remove from Cart" :"Add to cart"}</Button>
        </div>
    )
}

export default AddToCartButton