// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

// Imports: Redux Root Saga
import rootSaga from './saga'
// Imports: Redux
import rootReducer from './reducers'

// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['persisted'],
    // For Merging the data upgradation
    stateReconciler: autoMergeLevel2,
    // Persisted Data version
    version: 1,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
    persistedReducer,
    applyMiddleware(
        sagaMiddleware,
    ),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export {
    store,
    persistor,
};
