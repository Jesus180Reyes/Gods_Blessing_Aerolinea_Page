import { useEffect, useState } from "react";
import { LoadingPage } from '../shared/LoadingPage';
import 'animate.css';
import { Navbar } from "../shared";
import { CustomForm } from '../components/CustomForm';
import { MenuComponent } from "../shared/MenuComponent";
export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);  
    }, 2000);
  }, [isLoading]);
  
    if(isLoading) return (<LoadingPage/>);
  return (
    <>
    <div className="home-container animate__animated animate__fadeIn">
    <Navbar/>
    <MenuComponent/>
    <div className="main-text" >
      <h1>NO IMPORTA A QUE PAIS QUIERAS IR</h1>
      <h1>VIAJAR CON NOSOTROS ES <span>FACIL Y BARATO</span></h1>
    </div>
    <CustomForm/>
    </div>
    </>
  )
}

