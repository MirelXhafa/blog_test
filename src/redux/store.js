import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import monitorReducerEnhancer from "./enhancers/monitorReducers";
import logger from "./middleware/logger";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
};

function configureStore(preloadedState) {
  const middlewares = [logger, thunk, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );

  let persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
