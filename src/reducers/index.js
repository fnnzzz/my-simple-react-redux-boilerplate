import { combineReducers } from 'redux'

// redux form
import {reducer as formReducer} from 'redux-form';

import app from './app'

const rootReducer = combineReducers({
    app,
    form: formReducer
})

export default rootReducer