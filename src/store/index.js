import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import game25Reducer from './reducers/game25Reducer';

const store = createStore(
    game25Reducer,
    applyMiddleware(
        thunk,
        createLogger({
            collapsed: true,
        }),
    ),
);


export default store;