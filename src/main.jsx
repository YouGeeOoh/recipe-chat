import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewHistory from './ViewHistory.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import History from './History.jsx'
import Home from './Home.jsx'
import NewChat from './NewChat.jsx'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <NewChat />
            },
            
            {
                path: "history/:chatId",
                element: <ViewHistory />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
