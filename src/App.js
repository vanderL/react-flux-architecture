import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Header from './components/Header';

import GlobalStyles from './styles/global';
import Routes from './routes'

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
