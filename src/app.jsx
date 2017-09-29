import React from 'react';
import { render } from 'react-dom';
import Article from './Article.jsx';
import Counter from './Counter.jsx';
import { store } from './Counter.jsx';
import data from './data.jsx';
import { Provider } from 'react-redux';

import './style.sass';


render(
    <div>
        <Provider store={store}>
            <Counter />
        </Provider>
        {/*<Article />*/}
    </div>,
    document.getElementById('root')
);