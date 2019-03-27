import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Reducers as rootReducer } from './ducks';
import sagas from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [
  sagaMiddleware,
];

const createAppropriareStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriareStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export { store };
