import { lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import './index.css';

const HomePage = lazy(() => import('./pages/home/home.page'));
const AboutPage = lazy(() => import('./pages/about/about.page'));



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
