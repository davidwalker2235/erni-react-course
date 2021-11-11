import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClientProvider} from 'react-query';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store/store";
import HeaderBar from "./components/header-bar/header-bar";
import {BrowserRouter} from "react-router-dom";
import RootNavigator from "./router";
import {queryClient} from './react-query.config';
import {Modal, Toaster} from "./components";

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Modal />
      <Toaster />
      <BrowserRouter>
        <HeaderBar />
        <RootNavigator />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your user-list, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
