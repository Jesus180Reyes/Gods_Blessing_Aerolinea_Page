import { BannerComponent, SocialMediaComponent } from "../components/sucursals"
import { sucursalesLocation } from '../data/sucursals';
import { TravelAgentsComponent } from '../components/sucursals/TravelAgentsComponent';
import { Footer } from "../shared";
import { useEffect } from 'react';
import { notify } from '../helpers/notify';
import { ToastContainer } from "react-toastify";


export const AgentsPage= () => {
  document.title = "Agentes de Viajes | God's Blessing";
  useEffect(() => {
    notify("Estas visualizando la pagina Agentes de Viajes");
  
    
  }, []);
  
  return (
    <>
    
    <BannerComponent title={"Agentes de Viajes"}/>
    {
      sucursalesLocation.map((sucursal,i) => {
        return <div className="all-agents-container" key={i}>
          <h3>{sucursal.title}</h3>
        <TravelAgentsComponent sucursal={sucursal} isShowTitle={false}/>
        </div> 
      })
    }
    <SocialMediaComponent sucursal={sucursalesLocation[1]}/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}
