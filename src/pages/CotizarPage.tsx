import { FeedbackComponent, PromotionComponent } from "../components/home"
import { BannerComponent, SocialMediaComponent } from "../components/sucursals"
import { Footer,FloatingActionButton } from "../shared"
import { sucursalesLocation } from '../data/sucursals';
import { CotizarComponent } from "../components/cotizar/CotizarComponent";

export const CotizarPage = () => {
  return (
    <>
    <BannerComponent title={"Cotizar Vuelo"}/>
    <CotizarComponent/>
    <PromotionComponent/>
    <FeedbackComponent/>
    <SocialMediaComponent sucursal={sucursalesLocation[0]}/>
    <Footer/>
    <FloatingActionButton phoneNumber={"99078813"}/>
    </>
  )
}
