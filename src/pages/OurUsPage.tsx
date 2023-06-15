import { FeedbackComponent, RowArticleFeat } from "../components/home"
import { BannerComponent, SocialMediaComponent } from "../components/sucursals"
import { AboutVision,AboutUsRowComponent,ValoresCardComponent } from '../components/about';
import { FloatingActionButton, Footer } from "../shared"
import { sucursalesLocation } from '../data/sucursals';
import { ToastContainer } from "react-toastify";
import { useEffect } from 'react';
import { notify } from '../helpers/notify';

export const OurUsPage = () => {
  document.title = "Sobre Nosotros | God's Blessing"
  
  useEffect(() => {
    notify("Estas visualizando la pagina Sobre Nosotros");
    notify("Recuerda que puedes comunicarte con nosotrs a traves de nuestras redes sociales o Pagina");
  
    
  }, [])
  

  return (
    <>
    <BannerComponent title={"Sobre Nosotros"}/>
    <div className="valores-container">
      <h3>Valores</h3>
      <div className="cards-valores animate__animated animate__slideInUp">
      <ValoresCardComponent title="Compromiso" description="Nuestro alto valor de compromiso con nuestros clientes, empleados y comunidad hacen que cada acción que se realice sea de bien común." icon={"fa-solid fa-plane-circle-check"}/>
      <ValoresCardComponent icon={"fa-sharp fa-solid fa-user-shield"} title="Responsabilidad" description="Nuestra agencia tiene un gran sentido de responsabilidad, siendo este uno de nuestros pilares desde el momento que un cliente nos contacta hasta el momento que este obtuvo el servicio."  />
      <ValoresCardComponent icon={"fa-sharp fa-solid fa-check"} title="Calidad" description=" Cada vuelo, cotización y atención que se brinda se hace cumpliendo con la calidad requerida para que nuestros clientes se sientan seguros."/>
      <ValoresCardComponent icon={"fa-sharp fa-solid fa-shield-halved"} title="Seguridad" description="Gestionamos y protegemos la información de nuestros clientes, empleados, y proveedores, verificando que su uso siempre se realice de manera segura."/>
    </div>
      </div>
    <RowArticleFeat isRowReverse={true} ArticleComponent={AboutUsRowComponent} imgSrc={"https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/sucursal-danli.jpg?alt=media&token=15e7af50-59aa-4826-9099-3ceb99aa64f4"}/>
    <RowArticleFeat isRowReverse={false} ArticleComponent={AboutVision} imgSrc={"https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/sucursal.jpg?alt=media&token=9c7c71ee-7c37-412b-8258-8932859d6da3"}/>
    <FeedbackComponent/>
    <SocialMediaComponent sucursal={sucursalesLocation[0]}/>
    <Footer/>
    <FloatingActionButton phoneNumber="99078813"/>
    <ToastContainer/>
    </>
  )
}
