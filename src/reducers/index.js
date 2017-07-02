'use sctrict'

import {combineReducers} from 'redux';

// Aqui vamos a importar reducers para combinarlos
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// Aqui combinamos los reducers
export default combineReducers({
    books: booksReducers,
    cart : cartReducers
})