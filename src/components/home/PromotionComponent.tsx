import { promotions } from '../../data/promotions';
export const PromotionComponent = () => {
  return (
    <>
     <div className="promotions-container">
      <h1>Promociones</h1>
      <div className="cards">

      <div className="card-promotion">
        <img alt={promotions[0].title} src={promotions[0].imgSrc}  />
        <div className="gradient"></div>
        <h2>{promotions[0].title}</h2>
        <h3>Desde L. {promotions[0].price}</h3>
        {/* <p>Desde {promotions[0].desde} Hasta {promotions[0].hasta}</p> */}
        <a href={`https://wa.me/+50450499078813?text=Hola%20Quiero%20una%20cotizacion%20de%20${promotions[0].title}`}><button>Contactar</button></a>

      </div>
      <div className="card-promotion">
        <img  alt={promotions[1].title} src={promotions[1].imgSrc}  />
        <div className="gradient"></div>
        <h2>{promotions[1].title}</h2>
        <h3>Desde L. {promotions[1].price}</h3>
        {/* <p>Desde {promotions[1].desde} Hasta {promotions[1].hasta}</p> */}
        <a href={`https://wa.me/+50450499078813?text=Hola%20Quiero%20una%20cotizacion%20de%20${promotions[1].title}`}><button>Contactar</button></a>

      </div>
      <div className="card-promotion">
        <img alt={promotions[2].title}  src= {promotions[2].imgSrc} />
        <div className="gradient"></div>
        <h2>{promotions[2].title}</h2>
        <h3>Desde L. {promotions[2].price}</h3>
        {/* <p>Desde {promotions[2].desde} Hasta {promotions[2].hasta}</p> */}
        <a href={`https://wa.me/+50450499078813?text=Hola%20Quiero%20una%20cotizacion%20de%20${promotions[2].title}`}><button>Contactar</button></a>
      </div>
      </div>
      <a href="/promociones"><button className="promotion-button">Ver mas Promociones</button></a>
    </div>    
    </>
  )
}
