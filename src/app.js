'use strict'

import { createStore } from 'redux';

//Step 3 define reducers
const reducer = function (state = { books: [] }, action) {
    switch (action.type) {
        case "Post_book":
            //let books = state.books.concat(action.payload)
            //return books
            return { books: [...state.books, ...action.payload] };
        case "Delete_book":     
            //Crear copia del actual array de books
            const currentBookToDelete = [...state.books]
            //Determinar que index del array de book vamos a eliminar
            const indexToDelete = currentBookToDelete.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
            )
            //usar slice para eliminar book en el indice expecificado
            return {books: [...currentBookToDelete.slice(0, indexToDelete),
                ...currentBookToDelete.slice(indexToDelete + 1)]}
        case "update_book":  
            //Crear copia del actual array de books
            const currentBookToUpdate = [...state.books] 
            //Determinar que index del array de book vamos a actualizar
            const indexToUpdate = currentBookToUpdate.findIndex(
                function(book){
                    return book.id === action.payload.id;
                }
            )
            // Crear un nuevo book object con los nuevos valores y con el mismo array index que tiene el elemento que 
            // queremos reemplazar, vamos a utlizar spread pero podriamos utilizar concat.
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                titulo: action.payload.titulo
            }
            // hacemos log para ver el como el libro actualizado
            console.log("Como es el libro actualizado", newBookToUpdate) 
            //usamos slice para eliminar el libro con el indice especificado y reemplazarlo con el nuevo objeto.
            return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, 
                ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    }
            return state
}




//Step 1 create the Store
const store = createStore(reducer);

store.subscribe(function () {
    console.log('current state is: ', store.getState());
    //console.log('El precio es : ' , store.getState()[0].precio);
})

//Step 2 create and dispatch actions
store.dispatch({
    type: "Post_book",

    payload:
    [{
        id: 1,
        titulo: "harry porter",
        precio: '500€',
        descripcion: "Libro de aventuras"
    },
    {
        id: 2,
        titulo: "Terminator",
        precio: '400€',
        descripcion: "aventruas"
    }]
})

// Dispatch  a second action
store.dispatch({
    type: "Post_book",
    payload:
    [{
        id: 3,
        titulo: "Regreso al futuro",
        precio: '100€',
        descripcion: "Ciencia ficcion"
    }]
})
// Delete a book
/*store.dispatch({
    type: "Delete_book",
    payload: { id: 1 }
})*/
// Update a book
store.dispatch({
    type: "update_book",
    payload: { id: 3,
    titulo: "Regreso al futuro III" }
})
