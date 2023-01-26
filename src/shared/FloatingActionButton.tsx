import { FC } from 'react';
interface Props {
  phoneNumber: number | string
}
export const FloatingActionButton:FC<Props> = ({phoneNumber}) => {
  return (
    <>
    <div className="floating-button animate__animated animate__fadeInUp" onClick={()=>window.location.href = `https://wa.me/+504${phoneNumber}?text=Hola%20Quiero%20una%20cotizacion`} >
      <i className="fa-brands fa-whatsapp"></i>
    </div>
    </>
  )
}
