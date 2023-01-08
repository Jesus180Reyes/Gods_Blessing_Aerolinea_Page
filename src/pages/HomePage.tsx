import { useEffect, useState } from "react";
import { LoadingPage } from '../shared/LoadingPage';
import 'animate.css';
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
    <h1>Home Page</h1>
    <hr />
    <img src={"https://agenciadeviajesgodsblessing.site/img/6.jpeg"} alt="" />
    </div>
    </>
  )
}

