import { applyMiddleware, createStore, Store } from '@reduxjs/toolkit';
import pagesReducer from './reducers/pages';
import thunk from "redux-thunk"

export const store: Store = createStore(pagesReducer, applyMiddleware(thunk));

export default store;