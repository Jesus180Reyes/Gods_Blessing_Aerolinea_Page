import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sucursales } from '../interfaces/sucursales-interface';
interface Props {
    sucursales:Sucursales[],
    isModal: boolean
}
export const BoxSucursal:FC<Props> = ({sucursales, isModal = true}) => {
    const navigate = useNavigate();

    const onHandleClick = (path:string)=> {
        if(!isModal) return navigate(path);
        navigate(`sucursales/${path}`);
    }
  return (
    <>
    {
        sucursales.map((sucursal,i) => {
            return <div key={i} className="box-sucursal" onClick={ ()=>onHandleClick(sucursal.onClick)}>
            <p>{sucursal.title}</p>
            <i className="fa-solid fa-arrow-right"></i>
                       
            </div>
        })
    }
    

    </>
  )
}
