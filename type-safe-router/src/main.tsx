import { StrictMode } from 'react';

import './index.css';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <StrictMode>
        <App />
      </StrictMode>
    ),
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
