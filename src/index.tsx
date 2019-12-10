import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './helloWorldComponent';
import "./myStyles.scss";

ReactDOM.render(
  <div>
    <HelloWorldComponent />
  </div>,
  document.getElementById('root')
);
