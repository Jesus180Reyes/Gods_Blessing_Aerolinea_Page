import { BannerComponent } from "../components/sucursals"
import { sucursalesLocation } from '../data/sucursals';
import { TravelAgentsComponent } from '../components/sucursals/TravelAgentsComponent';
import { Footer } from "../shared";


export const AgentsPage= () => {
  document.title = "Agentes de Viajes | God's Blessing";
  return (
    <>
    
    <BannerComponent title={"Agentes de Viajes"}/>
    {
      sucursalesLocation.map(sucursal => {
        return <div className="all-agents-container">
          <h3>{sucursal.title}</h3>
        <TravelAgentsComponent sucursal={sucursal} isShowTitle={false}/>
        </div> 
      })
    }
    <Footer/>
    </>
  )
}
