import { FC } from 'react';
interface Props {
    title: string
}
export const BannerComponent:FC<Props> = ({title}) => {
  return (
    <>
        <div className="banner-container-sucursal animate__animated animate__fadeIn">
      <h3 className='animate__animated animate__zoomIn'>{title}</h3>
      <p>Visualiza todas nuestras sucursales segun tu ubicacion</p>
    </div>    
    </>
  )
}
