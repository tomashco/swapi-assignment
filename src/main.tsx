import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {router} from './Router.jsx'
import { RouterProvider } from '@tanstack/router'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
