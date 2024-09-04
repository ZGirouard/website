import React from 'react';
import ReactDOM from 'react-dom/client';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap';
document.head.appendChild(link);

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
