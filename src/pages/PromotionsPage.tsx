import { SocialMediaComponent } from '../components/sucursals';
import { BannerComponent } from '../components/sucursals/BannerComponent';
import { Footer } from '../shared';
import { sucursalesLocation } from '../data/sucursals';
import { promotions } from '../data/promotions';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { notify } from '../helpers/notify';

export const PromotionsPage = () => {
  useEffect(() => {
    notify("Visualiza todas nuestras promociones.");
  
    setTimeout(() => {
      notify("Recuerda que puedes seguirnos en nuestras redes sociales");
    }, 9000);
  }, []);
  
  return (
    <>
    <BannerComponent title={'Promociones'}/>
    
        <div className="cards">
            {
                promotions.map((promotion,i) => {
                    return <div className="card-promotion" key={i}>
                    <img src={promotion.imgSrc}  />
                    <div className="gradient"></div>
                    <h2>{promotion.title}</h2>
                    <h3>Desde L. {promotion.price}</h3>
                    {/* <p>Desde {promotions[0].desde} Hasta {promotions[0].hasta}</p> */}
                    <a href={`https://wa.me/+50450499078813?text=Hola%20Quiero%20una%20cotizacion%20de%20${promotion.title}`}><button>Contactar</button></a>
            
                  </div>
                })
            }
        </div>
    
      <SocialMediaComponent sucursal={sucursalesLocation[2]}/>    
    <Footer/>
    <ToastContainer/>
    </>
  )
}
