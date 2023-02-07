import { FC } from 'react';
import { testimony } from '../../interfaces/testimony';
interface Props {
    testimony:testimony; 
}
export const CardFeedback:FC<Props> = ({testimony}) => {
  return (
    <>
    <div className="card">
        <img src={testimony.imgUrl}  />
        <p>{testimony.description}</p>

      <span>{testimony.name}</span>

      </div>
    </>
  )
}


// 