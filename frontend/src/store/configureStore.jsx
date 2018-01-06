import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { rootEpic } from '../epics';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import {createBrowserHistory, createMemoryHistory} from 'history';
import { ajax } from 'rxjs/observable/dom/ajax';

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
        getJSON: ajax.getJSON,
        ajax: ajax
    }
});

const isBrowser = typeof window !== 'undefined';
export const history = isBrowser ? createBrowserHistory() : createMemoryHistory();

const routerMw = routerMiddleware(history);
const logger = createLogger({
    level: 'info',
    duration: true,
    collapsed: true
});

function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            epicMiddleware,
            routerMw,
            logger
        ));

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }
    return store;
}

export default configureStore;
