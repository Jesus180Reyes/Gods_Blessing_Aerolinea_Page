import { customAlert } from '../../helpers/custom_alert';
import emailjs from '@emailjs/browser';
import { useFormHome } from '../../hooks/';
export const CustomForm = () => {
  const {phoneNumber,destiny,dateAtComeback,dateAtGo,resetInputsForm, onInputDateAtComebackFormChange,onInputDateAtGoFormChange,onInputDestinyFormChange,onInputNumberFormChange} = useFormHome();

  const onSubmit = (e:any)=> {
    e.preventDefault();
    if(phoneNumber.length <=1 )return customAlert("El numero de telefono es obligatorio","Rellena todos los campos requeridos", "error");
    if(phoneNumber.length < 8 )return customAlert("Numero de telefono no valido","Rellena todos los campos requeridos", "error");
    if(destiny.length <=1 )return customAlert("El destino es obligatorio","Rellena todos los campos requeridos", "error");
    if(dateAtGo.length <=1 )return customAlert("La fecha de ida es obligatorio","Rellena todos los campos requeridos", "error");
    if(dateAtComeback.length <=1 )return customAlert("La fecha de Vuelta es obligatorio","Rellena todos los campos requeridos", "error");
    const message = {
      phoneNumber,
      destiny,
      dateAtGo,
      dateAtComeback,
    }
    emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID_HOME,message, import.meta.env.VITE_PUBLIC_KEY);
    resetInputsForm();
    customAlert("Cotizacion enviada!!","La Cotizacion fue enviada exitosamente, muy pronto nos comunicaremos contigo","success");
  }
  return (
    <>
     <form >
    <div className="form-container animate__animated animate__fadeIn" >
      <div className="input-controller" >
        <p>Numero de telefono:</p>
        <input type="number" placeholder="Ingrese tu numero de telefono" value={phoneNumber} onChange={onInputNumberFormChange} />
      </div>
      <div className="input-controller" >
        <p>Destino:</p>
        <input type="text" placeholder="Ingrese Destino"  value={destiny} onChange={onInputDestinyFormChange}/>
      </div>
      <div className="input-controller" >
        <p>Ida:</p>
        <input type="date"  value={dateAtGo} onChange={onInputDateAtGoFormChange}/>
      </div>
      <div className="input-controller" >
        <p>Vuelta:</p>
        <input type="date"  value={dateAtComeback} onChange={onInputDateAtComebackFormChange}/>
      </div>
      <button className="btn-form" onClick={onSubmit} >Cotizar Vuelo</button>
    </div>
    </form>    
    </>
  )
}
