import { BannerComponent } from "../components/sucursals"
import { Footer } from "../shared"
import { FloatingActionButton } from '../shared/FloatingActionButton';

export const BlogPage = () => {
  return (
    <>
    <BannerComponent title={"Blog"}/>
    <Footer/>
    <FloatingActionButton phoneNumber={"99078813"}/>
    </>
  )
}
