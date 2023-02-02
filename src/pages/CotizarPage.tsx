import { BannerComponent } from "../components/sucursals"
import { Footer,FloatingActionButton } from "../shared"

export const CotizarPage = () => {
  return (
    <>
    <BannerComponent title={"Cotizar Vuelo"}/>
    <Footer/>
    <FloatingActionButton phoneNumber={"99078813"}/>
    </>
  )
}
