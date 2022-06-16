/* eslint-disable */ 

import React, { StrictMode } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

// Import component
import TodoApp from './components/TodoApp';

//Import CSS
import "./App.css"

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(rootReducer); 

root.render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  </StrictMode>
);