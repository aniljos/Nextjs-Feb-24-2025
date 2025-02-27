import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';


const reducer = combineReducers({

    auth: authReducer
    
})

export const store = configureStore({

    reducer: reducer

});