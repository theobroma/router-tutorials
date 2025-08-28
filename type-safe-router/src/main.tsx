import { StrictMode } from 'react';

import './index.css';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';


const router = createBrowserRouter([
  {
    path: '/',
      children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
    ],
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<StrictMode><RouterProvider router={router} /></StrictMode>);
