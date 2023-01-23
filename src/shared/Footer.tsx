import { ColFooter } from './ColFooter';

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-container">
        <div className="row-footer">
          <ColFooter title={'Servicios'} subtittles={["Inicio","Blog", "Cosa que necesitas para viajar",]} />
          <ColFooter title={'Productos'} subtittles={["Paquetes", "Vuelos", "Asesorias"]}/>
          <ColFooter title={'Quienes Somos'} subtittles={["Sobre Nosotros","Cotizar vuelos","Cotizar Paquetes"]}/>
            <div className="col-logo-sm">
            <img src="logo.png" className="logo" alt="" />
            <div className="icons">
            <i onClick={()=>window.location.href = "https://wa.me/+50489676760?text=Hola%20Quiero%20una%20cotizacion"} className="fa-brands fa-whatsapp"></i>
            <i onClick={()=>window.location.href = "https://www.tiktok.com/@gods_blessing10"} className="fa-brands fa-tiktok"></i>
            <i onClick={()=>window.location.href = "https://www.facebook.com/agenciadeviajesgodblessing"} className="fa-brands fa-facebook"></i>
            <i onClick={()=>window.location.href = "https://www.instagram.com/godsblessing20eq"} className="fa-brands fa-instagram"></i>

            </div>

            </div>
        </div>
        <div className="created-by">
        <p>Copyright © 2023 God's Blessing. All Rights Reserved</p>
        <p>Created By <a href="https://www.instagram.com/jarts_hn" >JArts</a></p>

        </div>
        </div>
    </footer>
    </>
  )
}
