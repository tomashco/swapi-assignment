import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router.jsx'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from '@tanstack/router'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
