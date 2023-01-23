import { FC } from 'react';
interface Props {
    title:string,
    subtittles:string[],
}
export const ColFooter:FC<Props> = ({title,subtittles}) => {
  return (
    <>
     <div className="col-footer">
         <h3>{title}</h3>
         {
            subtittles.map((titles,i) => {
                return <p key={i}>{titles}</p>
            })
         }
    </div>

    </>
  )
}
