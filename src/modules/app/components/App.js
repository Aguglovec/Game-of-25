import "./App.css"

import { Outlet } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';

function App() {
    return (
        <div className='app'>
            <Provider store={store}>
                <Outlet />
            </Provider>
            <br />
        </div>
    );
}

export default App;
