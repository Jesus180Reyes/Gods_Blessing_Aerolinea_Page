import { testimonies } from "../../data/testimonies"

export const TestimoniesComponent = () => {
  return (
    <>
    {
        testimonies.map((testimony,i)  => {
            return <div className="card"key={i}> 
                <img src={testimony.imgUrl}  alt={testimony.name} />
                <p>{testimony.description}</p>
                <span>{testimony.name}</span>
            </div>
        })
    }
   
    </>
  )
}
