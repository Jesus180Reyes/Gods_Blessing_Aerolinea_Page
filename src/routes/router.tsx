import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from '../App';
import { CholutecaComponent,DanliComponent,TegucigalpaComponent,SPSComponent } from "../components/agents";
import { BlogPage,AgentsPage,HomePage,OurUsPage,SucursalesPage,CotizarPage,ThingsToTravelPage } from "../pages";

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
            {path: "choluteca",element: <CholutecaComponent/>},
            {path: "danli",element: <DanliComponent/>},
            {path: "tegucigalpa",element: <TegucigalpaComponent/>},
            {path: "san-pedro-sula",element: <SPSComponent/>},
            { path: '*', element: <Navigate to="/sucursales" /> },
            {element: <SucursalesPage/>, index:true},
        ]
        
    },
 

]);