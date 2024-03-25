import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MoviesProvider } from './providers/movies-provider';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesProvider>
      <RouterProvider router={router}/>
    </MoviesProvider>
  </React.StrictMode>
);
