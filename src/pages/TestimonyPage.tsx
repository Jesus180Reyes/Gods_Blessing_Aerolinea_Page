import { BannerComponent,SocialMediaComponent } from "../components/sucursals"
import { TestimoniesComponent } from "../components/testimonies/TestimoniesComponent";
import { sucursalesLocation } from '../data/sucursals';
import { FloatingActionButton, Footer } from "../shared";

export const TestimonyPage = () => {
    document.title = "Testimonios | God's Blessing";
  return (
    <>
    <BannerComponent title="Testimonios"/>
    <div className="feedback-container">
        <h1>Testimonios</h1>
        <p>Estos son algunas resenas de nuestros clientes</p>
        <div className="cards">
        <TestimoniesComponent/>
        </div>
        <SocialMediaComponent sucursal={sucursalesLocation[0]}/>
        <Footer/>
        <FloatingActionButton phoneNumber={sucursalesLocation[0].phone_number}/>
    </div>
    </>
  )
}
