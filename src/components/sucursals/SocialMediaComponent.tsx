import { Sucursales } from '../../interfaces/sucursales-interface';
import { FC } from 'react';
interface Props{
    sucursal: Sucursales
}
export const SocialMediaComponent:FC<Props> = ({sucursal}) => {
  return (
   <>
    <div className="social-media-container">
      <h3>Redes Sociales</h3>
      <p>Siguenos en nuestras redes sociales</p>

        <div className="icons">
        <i onClick={() => window.location.href = `https://wa.me/+504${sucursal.phone_number}?text=Hola%20Quiero%20una%20cotizacion`} className="fa-brands fa-whatsapp"></i>
        <i onClick={() => window.location.href = `${sucursal.links.facebookUrl}`}className="fa-brands fa-facebook"></i>
        <i onClick={() => window.location.href = `${sucursal.links.tiktokUrl}`}className="fa-brands fa-tiktok"></i>
        <i onClick={() => window.location.href = `${sucursal.links.instagramUrl}`}className="fa-brands fa-instagram"></i>
        </div>
      </div>
   </>
  )
}
