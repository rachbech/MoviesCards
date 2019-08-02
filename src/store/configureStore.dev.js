import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
const middlewares = [];
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middlewares.push(thunk);
  middlewares.push(logger);

export default createStore(rootReducer, applyMiddleware(...middlewares));

