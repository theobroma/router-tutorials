import { lazy, StrictMode, Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import './index.css';

const MIN_LAZY_DELAY = 300;

const HomePage = lazy(() => pMinDelay(import('./pages/home/home.page'), MIN_LAZY_DELAY));
const AboutPage = lazy(() => pMinDelay(import('./pages/about/about.page'), MIN_LAZY_DELAY));


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
    ],
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<StrictMode><RouterProvider router={router} /></StrictMode>);
