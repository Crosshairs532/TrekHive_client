import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Authprovider from './Authprovider/Authprovider'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
// import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider >
      <Authprovider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>

      </Authprovider>
    </MantineProvider>
  </React.StrictMode>,
)
