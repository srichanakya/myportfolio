import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import '../src/index.css';
import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import 'semantic-ui-css/semantic.min.css'
// ReactDOM.render(<App />, document.getElementById('root'));

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App />);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);