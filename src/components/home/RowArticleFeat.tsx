import { FC } from "react"

interface Props {
    isRowReverse?:boolean,
    ArticleComponent:FC,
    imgSrc:string
}
export const RowArticleFeat:FC<Props> = ({isRowReverse = false, ArticleComponent, imgSrc}) => {
  return (
    <>
     <div className="row-content" style={isRowReverse ?  {flexDirection: "row-reverse"}: {flexDirection: "row"}}>
      <img data-aos="fade-right" src={imgSrc}  />
      <div data-aos="fade-left" className="col-content ">
        <ArticleComponent/>
      </div>
    </div>

    </>
  )
}
