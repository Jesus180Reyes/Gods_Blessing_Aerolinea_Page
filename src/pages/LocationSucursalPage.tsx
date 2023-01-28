import { Sucursales } from '../interfaces/sucursales-interface';
import { FC, useEffect } from 'react';
import { Footer,FloatingActionButton } from '../shared';
import { FeedbackComponent } from '../components/home';
import { notify } from '../helpers/notify';
import { ToastContainer } from 'react-toastify';
import { SocialMediaComponent,LocationMapComponent, TravelAgentsComponent,BannerComponent } from '../components/sucursals';

interface Props {
    sucursal:Sucursales;
}

export const LocationSucursalPage:FC<Props> = ({sucursal}) => {
  document.title = `${sucursal.title} | God's Blessing`
  
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    notify(`Estas visualizando sucursal ${sucursal.title}`);
  }, []);
  
  return (
    <>
    <BannerComponent title={sucursal.title}/>
    <TravelAgentsComponent sucursal={sucursal}/>
    <LocationMapComponent sucursal={sucursal}/>
    <SocialMediaComponent sucursal={sucursal}/>
    <FeedbackComponent/>    
    <Footer/>
    <FloatingActionButton phoneNumber={sucursal.phone_number}/>
    <ToastContainer/>
    </>


)
}
{/* <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fagenciadeviajesgodblessing%2F&width=255&layout=button_count&action=like&size=large&share=true&height=46&appId" width="255" height="46" style={{border:"none", overflow: "hidden"}}
               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>

<iframe src={sucursal.links.facebookUrl} width="340"
            height="500" style={{border:"none", overflow: "hidden"}}     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
