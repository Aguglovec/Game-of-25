import './css/normalize.css';
import './css/skeleton.css';
import './css/dark-theme.css';
import './css/index.css';

import AppRoutes from './modules/app/components/AppRoutes';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>,
);
