import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers, {State} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig: PersistConfig<State> = {
    key: 'user',
    storage: storage,
    whitelist: ['user'] // which reducer want to store
  };
  const pReducer = persistReducer<State, any>(persistConfig, reducers);
const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store);

export { persistor, store };