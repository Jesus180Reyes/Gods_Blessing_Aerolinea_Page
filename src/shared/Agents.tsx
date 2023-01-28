import { Employees, Sucursales } from '../interfaces/sucursales-interface';
import { FC } from 'react';
interface Props {
    employe: Employees;
    sucursal: Sucursales;
}
export const Agents:FC<Props> = ({employe,sucursal}) => {
  return (
    <>
    <div className="card-agent animate__animated animate__fadeIn">
            <img src={employe.imgUrl}  />
            <p>{employe.name} {employe.lastName}</p>
            <button onClick={()=>window.location.href = `https://wa.me/+504${sucursal.phone_number}?text=Hola%20${employe.name}%20Quiero%20una%20cotizacion`}>Contactar</button>
          </div>
    </>
  )
}
