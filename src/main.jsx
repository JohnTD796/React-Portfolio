import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './reset.css';
import './index.css';

import App from './App.jsx';
import Error from './components/error.jsx'
import Portfolio from './components/portfolio.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Resume from './components/resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      },
    ],
  },
]);




ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);