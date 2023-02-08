import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from '../App';
import { BlogPage,PromotionsPage,AgentsPage,HomePage,OurUsPage,SucursalesPage,CotizarPage,TestimonyPage } from "../pages";
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
                path: "cotizar",
                element: <CotizarPage/>
            },
            {
                path: "testimonios",
                element: <TestimonyPage/>
            },
            {
                path: "promociones",
                element: <PromotionsPage/>
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
            {path: "comayagua",element: <LocationSucursalPage sucursal={sucursalesLocation[4]}/>},
            { path: '*', element: <Navigate to="/sucursales" /> },
            {element: <SucursalesPage/>, index:true},
        ]
        
    },
 

]);