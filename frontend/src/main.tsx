import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '@/components/chakra-ui/provider';
import App from './App';
import './styles/index.scss';

const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);