import { FC } from 'react';
interface Props {
    imgSrc: string,
    description:string
    username:string
}
export const CardFeedback:FC<Props> = ({imgSrc,username,description}) => {
  return (
    <>
    <div className="card">
        <img src={imgSrc}  />
        <p>{description}</p>

    <span>{username}</span>

      </div>
    </>
  )
}


// 