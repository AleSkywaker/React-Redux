'use strict'

import {createStore} from 'redux';

//Step 3 define reducers
const reducer = function(state={books:[]}, action){
    switch(action.type){
        case "Post_book": 
        let books = state.books.concat(action.payload)
        return {books:[...state.books, ...action.payload]};            
    }
    return state
}

//Step 1 create the Store
const store = createStore(reducer);

store.subscribe(function(){
    console.log('current state is: ' , store.getState());
    //console.log('El precio es : ' , store.getState()[0].precio);
})

//Step 2 create and dispatch actions
store.dispatch({
    type:"Post_book", 

    payload:
    [{
    id:1,
    titulo:"harry porter",
    precio: '500€',
    descripcion: "Libro de aventuras"
    },
    {
    id:2,
    titulo:"Terminator",
    precio: '400€',
    descripcion: "aventruas"
    }]
})

// Dispatch  a second action
store.dispatch({
    type:"Post_book", 
    payload:
    [{
    id:3,
    titulo:"Regreso al futuro",
    precio: '100€',
    descripcion: "Ciencia ficcion"
    }]
    })
