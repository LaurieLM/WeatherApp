import { StrictMode } from 'react'
// ROUTER
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// REACT QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// STYLES
import './style.css'
// PAGES
import Layout from './pages/Layout.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
      // {
      //   path: "weather",
      //   element: <Weather />
      // },
      // {
      //   path: "about",
      //   element: <About />
      // }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)

