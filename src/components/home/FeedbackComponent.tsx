import { CardFeedback } from './CardFeedback';
import { testimonies } from '../../data/testimonies';

export const FeedbackComponent = () => {
  return (
    <>
     <div className="feedback-container">
      <h1>Testimonios</h1>
      <p>Estos son algunas resenas de nuestros clientes</p>
      <div className="cards">
        <CardFeedback testimony={testimonies[3]} />
        <CardFeedback testimony={testimonies[1]}/>
        <CardFeedback testimony={testimonies[7]}/>
      </div>
      <button><a href='/testimonios'>Ver mas</a></button>
    </div>
    </>
  )
}
