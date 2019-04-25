import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { contentListReducer } from './content/reducer';


const rootReducer = combineReducers({
    contentListReducer
});

export const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);