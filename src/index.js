import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </AuthProvider>,
);

reportWebVitals();
