import { createStore, applyMiddleware, compose, AnyAction } from 'redux'
import rootReducer, { RootState } from 'reducers'
import { createLogger } from 'redux-logger'
import thunk, { ThunkMiddleware } from 'redux-thunk'
// import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({ collapsed: true })

const  Middlewares = [thunk, logger]

/**
 * Making store with middleware
 * @type {object}
 * @param {object} initialState - initialState
 */
export default function configureStore(initialState:any) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...Middlewares), 
    )
  )

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
