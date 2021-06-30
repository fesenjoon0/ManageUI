import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import 'react-toastify/dist/ReactToastify.min.css';
// import 'react-widgets/styles.css';
import 'react-widgets/dist/css/react-widgets.css';

import './app/layout/styles.css';
import App from './app/layout/App';
import ScrollToTop from './app/layout/ScrollToTop';
import reportWebVitals from './reportWebVitals';
import dateFnsLocalizer from 'react-widgets-date-fns';


// ReactDOM.render(
//     <App />
//   ,
//   document.getElementById('root')
// );



dateFnsLocalizer();

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);



reportWebVitals();
