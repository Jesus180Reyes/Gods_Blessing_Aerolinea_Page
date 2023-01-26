import { Sucursales } from '../interfaces/sucursales-interface';
import { FC } from 'react';
import { FloatingActionButton } from '../shared/FloatingActionButton';
import { Footer } from '../shared';
interface Props {
    sucursal:Sucursales;
}
export const LocationSucursalPage:FC<Props> = ({sucursal}) => {
    // TODO: Trabajar: Disenar la pagina de Sucursales
  return (
    <>
    <div className="banner-container-sucursal">
      <h3>{sucursal.title}</h3>
      <p>Visualiza todas nuestras sucursales segun tu ubicacion</p>
    </div>
   <h1>{sucursal.title}</h1>
    <iframe className='map' src={sucursal.locationUrl}  height="300" style={{border:"0"}}  loading="lazy"  ></iframe>

    
    
    {/* <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fagenciadeviajesgodblessing%2F&width=255&layout=button_count&action=like&size=large&share=true&height=46&appId" width="255" height="46" style={{border:"none", overflow: "hidden"}}
                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>

    <iframe src={sucursal.links.facebookUrl} width="340"
                height="500" style={{border:"none", overflow: "hidden"}}     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}

    <Footer/>
    <FloatingActionButton phoneNumber={sucursal.phone_number}/>

    </>


  )
}
