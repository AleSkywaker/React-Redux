'use strict'

//Add to cart
export function addToCart(book) {
    return {
        type: "add_to_cart",
        payload: book
    }
}