import { promotions } from '../../data/promotions';
export const PromotionComponent = () => {
  return (
    <>
     <div className="promotions-container">
      <h1>Promociones</h1>
      <div className="cards">

      <div className="card-promotion">
        <img src={promotions[0].imgSrc}  />
        <div className="gradient"></div>
        <h2>{promotions[0].title}</h2>
        <h3>Desde USD {promotions[0].price}</h3>
        <p>Desde {promotions[0].desde} Hasta {promotions[0].hasta}</p>
        <button>Leer Mas</button>

      </div>
      <div className="card-promotion">
        <img src={promotions[1].imgSrc}  />
        <div className="gradient"></div>
        <h2>{promotions[1].title}</h2>
        <h3>Desde USD {promotions[1].price}</h3>
        <p>Desde {promotions[1].desde} Hasta {promotions[1].hasta}</p>
        <button>Leer Mas</button>

      </div>
      <div className="card-promotion">
        <img src= {promotions[2].imgSrc} />
        <div className="gradient"></div>
        <h2>{promotions[2].title}</h2>
        <h3>Desde USD {promotions[2].price}</h3>
        <p>Desde {promotions[2].desde} Hasta {promotions[2].hasta}</p>
        <button>Leer Mas</button>
      </div>
      </div>
      <button className="promotion-button">Ver mas Promociones</button>
    </div>    
    </>
  )
}
