import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
} from "react-router-dom"


render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter >,
  document.getElementById('root')
);

