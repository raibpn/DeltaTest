import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <Provider store={store}>
            <Router>
                <App />
                <ToastContainer />
            </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
reportWebVitals();