import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import Dashboard from './pages/DashboardPage.jsx'
import ProgressPage from './pages/ProgressPage.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,  // Redirect to /dashboard
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"progress",
        element:<ProgressPage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
