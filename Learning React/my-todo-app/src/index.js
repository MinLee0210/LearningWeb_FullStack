/* eslint-disable */ 

import React, { StrictMode } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

// Import component
import TodoApp from './components/TodoApp';

//Import CSS
import "./App.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoApp/>
  </StrictMode>
);