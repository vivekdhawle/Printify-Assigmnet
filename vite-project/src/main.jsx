import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"dashboard",
        element:<Dashboard/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
