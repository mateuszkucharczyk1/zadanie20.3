import React from 'react';
import { render } from 'react-dom';

render(
    <h1>Inicjalizacja projektu</h1>,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
    </Provider>,
    document.getElementById('root')
);
