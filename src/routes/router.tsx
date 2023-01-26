import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from '../App';
import { BlogPage,AgentsPage,HomePage,OurUsPage,SucursalesPage,CotizarPage,ThingsToTravelPage } from "../pages";
import { LocationSucursalPage } from '../pages/LocationSucursalPage';
import { sucursalesLocation } from '../data/sucursals';

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
              path: "blog",
              element: <BlogPage/>
          },
          {
              path: "agents",
              element: <AgentsPage/>
          },
          {
              path: "aboutUs",
              element: <OurUsPage/>
          },
          {
              path: "cosa-para-viajar",
              element: <ThingsToTravelPage/>
            },
            {
                path: "cotizar",
                element: <CotizarPage/>
            },
            
            { path: '*', element: <Navigate to="/" /> },
        ],
        
    },
    {
        path: "/sucursales",
        element: <App/>,
        children: [
            {path: "choluteca",element: <LocationSucursalPage sucursal={sucursalesLocation[0]}/>},
            {path: "danli",element: <LocationSucursalPage sucursal={sucursalesLocation[1]}/>},
            {path: "tegucigalpa",element: <LocationSucursalPage sucursal={sucursalesLocation[2]}/>},
            {path: "san-pedro-sula",element: <LocationSucursalPage sucursal={sucursalesLocation[3]}/>},
            { path: '*', element: <Navigate to="/sucursales" /> },
            {element: <SucursalesPage/>, index:true},
        ]
        
    },
 

]);