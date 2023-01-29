import { FC } from "react";

interface Props {
    title: string;
    description: string;
    icon: string
}
export const ValoresCardComponent:FC<Props> = ({title, description, icon}) => {
  return (
    <>
    <div className="valores-card">
        <i className={icon}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  )
}
