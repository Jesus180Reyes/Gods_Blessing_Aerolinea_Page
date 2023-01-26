import { BoxSucursal, Footer } from "../shared"
import { sucursalesLocation } from '../data/sucursals';

export const SucursalesPage = () => {
  document.title = "Sucursales | God's Blessing"
  return (
    <>
    <div className="sucursal-container">
      <div className="box-sucursals-container">
        <h3>Elige una Sucursal segun tu ubicacion:</h3>
      <BoxSucursal sucursales={sucursalesLocation} isModal={false}/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
