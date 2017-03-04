/**
 * Base - Render Root File
 *
 * @file index.js
 * @author mudio(job.mudio@gmail.com)
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import './style/mixin.global.css';
import routes from './routes';
import configureStore from './store/configureStore';

const cache = JSON.parse(localStorage.getItem('bos')) || {};
const _store = configureStore(cache);
const history = syncHistoryWithStore(hashHistory, _store);

_store.subscribe(() => {
    const {navigator, uploads, downloads} = _store.getState();
    localStorage.setItem('bos', JSON.stringify({uploads, downloads, navigator}));
});

export default function startup(container) {
    render(
        <Provider store={_store}>
            <Router history={history} routes={routes} />
        </Provider>,
        container
    );
}
