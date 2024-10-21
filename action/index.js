"use server";

// get All Products

export async function fetchAllProducts() {
    try {
        const result = await fetch(`https://dummyjson.com/products`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await result.json();
        return {
            success: true,
            data: data?.products,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message + error.name + error.stack,
        };
    }
}

// export getAllProducts by id

export async function fetchProductById(id) {
    try {
        const result = await fetch(`https://dummyjson.com/products/${id}`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await result.json();
        return {
            success: true,
            data: data,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.message + error.name + error.stack,
        };
    }
}