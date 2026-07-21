import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewHistory from './ViewHistory.jsx'
import App2 from "./App2.jsx"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import History from './History.jsx'
// import 

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App2/>,
    errorElement: <ErrorPage/>
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
