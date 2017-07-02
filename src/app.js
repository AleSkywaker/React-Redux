'use strict'

import { createStore } from 'redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index'




//Step 1 create the Store
const store = createStore(reducers);

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
store.dispatch({
    type: "Delete_book",
    payload: { id: 1 }
})
// Update a book
store.dispatch({
    type: "update_book",
    payload: { id: 3,
    titulo: "Regreso al futuro III" }
})

// ACCIONES DE CART
store.dispatch({
    type: "add_to_cart",
    payload: [{ id: 3 }]
})
