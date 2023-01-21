import { CardFeedback } from './CardFeedback';

export const FeedbackComponent = () => {
  return (
    <>
     <div className="feedback-container">
      <h1>Testimonios</h1>
      <p>Estos son algunas resenas de nuestros clientes</p>
      <div className="cards">
      <CardFeedback imgSrc={'https://randomuser.me/api/portraits/women/8.jpg'} description={"Occaecat sint cupidatat adipisicing do deserunt deserunt velit commodo amet eu. Elit adipisicing pariatur irure incididunt ex ipsum. Eu velit irure duis commodo non et elit consequat"} username={'Estela Gimenez'}/>
      <CardFeedback imgSrc={'https://randomuser.me/api/portraits/women/86.jpg'} description={"Occaecat sint cupidatat adipisicing do deserunt deserunt velit commodo amet eu. Elit adipisicing pariatur irure incididunt ex ipsum. Eu velit irure duis commodo non et elit consequat"} username={'Taylor Well'}/>
      <CardFeedback imgSrc={'https://randomuser.me/api/portraits/women/13.jpg'} description={"Occaecat sint cupidatat adipisicing do deserunt deserunt velit commodo amet eu. Elit adipisicing pariatur irure incididunt ex ipsum. Eu velit irure duis commodo non et elit consequat"} username={'Alba Gimenez'}/>
      </div>
    </div>
    </>
  )
}
