import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM
  .createRoot(document.querySelector('#root'))
  .render(
    <StrictMode>
      <App />
    </StrictMode>
  );
