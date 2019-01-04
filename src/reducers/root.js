import appReducer from './appReducer'
import booksReducer from './booksReducer'
import { reducer as formReducer } from 'redux-form'

import {combineReducers} from 'redux'

export default combineReducers({
    appReducer,
    booksReducer,
    form: formReducer
})