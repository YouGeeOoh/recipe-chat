import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import History from './History.jsx'
import App2 from "./App2.jsx"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Historys from './Historys.jsx'
// import 

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App2/>

  },
  // {
  //   path: '/history/:id', 
  //   element: <Historys/>
  // },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
