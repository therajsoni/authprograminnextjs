"use client";

import { useSelector } from "react-redux";
import { Button } from "../ui/button";



function AddToCartButton({productItem}){
  
    const {cart} = useSelector(state => state)

    console.log(cart?.cart);
    
    return (
        <div className="mt-8 max-w-md">
            <Button
            type="button"
            onClick={cart?.cartItem.som(item => item.id)}
            >{
                cart?.cartItem?.some(item => item.id === productItem.id) ? "Remove from Cart" :"Add to cart"}</Button>
        </div>
    )
}

export default AddToCartButton