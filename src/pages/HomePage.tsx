import { useEffect, useState } from "react";
import { ArticleContent,WhyFly,CustomForm,RowArticleFeat, BlogContainer, PromotionComponent, FeedbackComponent } from "../components/home";
import { MenuComponent,Navbar,LoadingPage, FloatingActionButton, Footer,CustomModal } from "../shared";
import { notify } from "../helpers";
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify';


export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);  
    }, 2000);
  }, [isLoading]);

  useEffect(() => {
   notify("Bienvenido a God's Blessing ✈️");
  }, []);
  
    if(isLoading) return (<LoadingPage/>);
  return (
    <>
    <div className="home-container animate__animated animate__fadeIn">
    <Navbar/>
    <MenuComponent/>
    <div className="main-text animate__animated animate__fadeInUp animate__delay-1s" >
      <h1>NO IMPORTA A QUE PAIS QUIERAS IR</h1>
      <h1>VIAJAR CON NOSOTROS ES <span>FACIL Y BARATO</span></h1>
    </div>
    <CustomForm/>
    </div>
    <RowArticleFeat ArticleComponent={ArticleContent} imgSrc="https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/background1.jpg?alt=media&token=8caa321e-8d47-4992-bc04-48535664f380" />
    <RowArticleFeat ArticleComponent={WhyFly} isRowReverse={true} imgSrc="https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/background2.jpg?alt=media&token=2f2b593c-a84f-4efa-a117-0836d320f4d4" />
    <BlogContainer/>
    <PromotionComponent/>
    <FeedbackComponent/>
    <FloatingActionButton/>
    <Footer/>
    <CustomModal/>
    <ToastContainer/>
    </>
  )
}

