'use strict'

//Post Books
export function postBooks(book){
    return {
    type: "Post_book",
    payload: book
    }
}

//Delete books
export function deleteBooks(id) {
    return {
    type: "Delete_book",
    payload: id
    }
}

//Update books
export function updateBook(book){
    return {
    type: "update_book",
    payload: book
    }
}