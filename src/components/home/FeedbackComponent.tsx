import { CardFeedback } from './CardFeedback';
import { testimonies } from '../../data/testimonies';

export const FeedbackComponent = () => {
  return (
    <>
     <div className="feedback-container">
      <h1>Testimonios</h1>
      <p>Estos son algunas resenas de nuestros clientes</p>
      <div className="cards">
        <CardFeedback testimony={testimonies[Math.floor(Math.random() * testimonies.length)]} />
        <CardFeedback testimony={testimonies[Math.floor(Math.random() * testimonies.length)]}/>
        <CardFeedback testimony={testimonies[Math.floor(Math.random() * testimonies.length)]}/>
      </div>
    </div>
    </>
  )
}
