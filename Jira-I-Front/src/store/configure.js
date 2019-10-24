import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import modules from './modules';
import rootSaga from './sagas'

const isDev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware()

const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const middlewares = [
    sagaMiddleware
]

const configure = (preloadedState) => {
    const store = createStore(
        modules, 
        preloadedState, 
        composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(rootSaga);
    return store;
};


export default configure;