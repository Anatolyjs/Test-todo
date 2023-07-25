import {combineReducers, configureStore} from '@reduxjs/toolkit';
import toolkitSlice from './mainSlice';

const rootReducer = combineReducers({
    main: toolkitSlice
});

export const store = configureStore({
    reducer: rootReducer
});