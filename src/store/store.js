import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { categoryReducer } from '../reducers/categoryReducer';
import { itemReducer } from '../reducers/itemReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    category: categoryReducer,
    item: itemReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);