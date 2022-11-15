import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />);
reportWebVitals();
