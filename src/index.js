import React from 'react';
import ReactDOM from 'react-dom/client';
import r2wc from "react-to-webcomponent"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('rsw'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const r2wrs = r2wc(App, React, ReactDOM);
customElements.define("rsw", r2wrs)
