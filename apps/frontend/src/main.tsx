import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'urql';
import App from './App';
import graphqlClient from './graphqlClient';

ReactDOM.render(
    <React.StrictMode>
        <Provider value={graphqlClient}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
