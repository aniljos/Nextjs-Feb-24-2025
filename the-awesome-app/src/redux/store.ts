import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';

const reducer = combineReducers({

    auth: authReducer,
    gadgets: gadgetsReducer
    
})

export const store = configureStore({

    reducer: reducer,
    devTools: true

});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;