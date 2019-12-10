import React from 'react';
import "./helloWorldComponent.scss";
import { getEnvironmentMode, getApiBase } from './helloworld';

export const HelloWorldComponent: React.FunctionComponent = () => {
  return (
    <div className="hello-world-div">
      <span className="hello-world-title">Hello World!!!</span>
      <div className="hello-world-environment">
        <span>ENVIRONMENT MODE: {getEnvironmentMode()}</span>
        <span>API BASE: {getApiBase()}</span>
      </div>
    </div>
  );
};
