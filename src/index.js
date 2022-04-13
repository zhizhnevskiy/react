import React from 'react';

// import ReactDOM from 'react-dom';
// import App from './App';

import {createRoot} from "react-dom/client";
import Header from "./header";

import './index.css';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//     <React.StrictMode>
//         <Header/>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Header/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
