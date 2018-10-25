import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { myStore } from './store/configStore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
