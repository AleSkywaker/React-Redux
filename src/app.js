'use strict'
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index'
//IMPORT ACTIONS
import { addToCart } from './actions/cartActions'
import { postBooks, deleteBooks, updateBook } from './actions/booksActions'

//Step 1 create the Store
const middleware =applyMiddleware(logger);
const store = createStore(reducers, middleware);

/*store.subscribe(function () {
    console.log('current state is: ', store.getState());
    console.log('El precio es : ' , store.getState()[0].precio);
})*/

//Step 2 create and dispatch actions
//Post books
store.dispatch(postBooks(
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
))
// Delete a book
store.dispatch(deleteBooks({ id: 1 }))
// Update a book
store.dispatch(updateBook
    ({
        id: 3,
        titulo: "Regreso al futuro III"
    }))
// ACCIONES DE CART
store.dispatch(addToCart([{ id: 1 }]))

