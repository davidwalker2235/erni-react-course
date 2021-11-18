import {render as rtlRender} from '@testing-library/react';
import {QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {queryClient} from '../src/react-query.config';
import rootReducers from "../src/reducers";
import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter} from "react-router-dom";

export function render(ui, store) {
  function Wrapper({children}) {
    if (store) {
      return (
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              {children}
            </BrowserRouter>
          </QueryClientProvider>
        </Provider>
      );
    }
    return children;
  }
  return rtlRender(ui, {wrapper: Wrapper});
}

export const renderWithRedux = (ui) => {
  const store = configureStore({
    reducer: rootReducers
  })
  const renderedResult = render(ui, store);
  return {...renderedResult, dispatch: store.dispatch};
};
