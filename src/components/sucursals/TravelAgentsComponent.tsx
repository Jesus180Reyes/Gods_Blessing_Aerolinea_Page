import { Sucursales } from '../../interfaces/sucursales-interface';
import { FC } from 'react';
import { Agents } from '../../shared';
interface Props {
    sucursal: Sucursales;
    isShowTitle?: boolean
}
export const TravelAgentsComponent:FC<Props> = ({sucursal,isShowTitle = true}) => {
  return (
    <>
     <div className="travel-agents">
      {
        !isShowTitle 
        ? undefined
        : <>
        <h3>Agentes de viajes</h3>
        <p>Recibe la mejor asesoría y planifica una experiencia memorable</p>
        </>

      }
      
      <div className="cards-agents">
      {

        sucursal.employees.map((employe,i) => {
          return <Agents employe={employe} sucursal={sucursal} key={i} index={i}/>
        })
      }
        </div>
    </div>
    </>
  )
}
