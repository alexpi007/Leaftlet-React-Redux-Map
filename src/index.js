import React from 'react';
import ReactDOM from 'react-dom';
import leaflet from 'leaflet';
import { Provider } from 'react-redux';

import store from './store';
import App from './containers/App';
import './index.css';

// leaflet issue fix - documented on https://github.com/PaulLeCam/react-leaflet/issues/453
delete leaflet.Icon.Default.prototype._getIconUrl;
const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');
leaflet.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
