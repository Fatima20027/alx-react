import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications  from './Notifications/Notifications';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);

reportWebVitals();