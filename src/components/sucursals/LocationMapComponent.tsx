import { Sucursales } from '../../interfaces/sucursales-interface';
import { FC } from 'react';
interface Props {
    sucursal: Sucursales;
}
export const LocationMapComponent:FC<Props> = ({sucursal}) => {
  return (
    <>
    <div className="location-map">
      <h3>Ubicacion</h3>
      <p>Sucursal mas cercana a ti</p>
      <div className="map">
    <iframe className='custom-map'  src={sucursal.locationUrl}   style={{border:"0"}}  loading="lazy"  ></iframe>

    </div>
      </div>
    </>
  )
}
