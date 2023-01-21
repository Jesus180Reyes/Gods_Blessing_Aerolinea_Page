import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { App } from '../App';

export const router = createBrowserRouter([
  {
      path:'/',
      element: <App/>,
      children: [
          {
              index: true,
              element: <HomePage/>
          },
          {
              path: "detals",
              element: <h1>Details Page</h1>,
          },
       
          { path: '*', element: <Navigate to="/" /> },
      ],
  
  },
 

]);