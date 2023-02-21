import { customAlert } from '../../helpers/';
import { useFormCotizacion } from '../../hooks/';
import emailjs from '@emailjs/browser';
export const CotizarComponent = () => {
  const { nameForm,dateAtComeBack,dateAtGo,emailForm,destinyForm,manyPersonsForm,numberForm,onInputDestinyChange,onInputNameChange,onInputDateAtComeBackChange,onInputEmailChange,onInputManyPersonsChange,onInputNumberChange,onInputDateAtGoChange,resetValuesForm} = useFormCotizacion();
  
  const onHandleSubmit = (e:any)=> {
    e.preventDefault();
    if(nameForm.length  <= 1) return customAlert("El Nombre es obligatorio", "Debes llenar todos los espacios solicitados","error");
    if(emailForm.length  <= 1) return customAlert("El Email es obligatorio", "Debes llenar todos los espacios solicitados","error");
    if(destinyForm.length  <= 1) return customAlert("El Destino es obligatorio", "Debes llenar todos los espacios solicitados","error");
    if(manyPersonsForm.length  <=0|| manyPersonsForm.length >=3) return customAlert("La cantidad de personas es obligatorio", "Debes llenar todos los espacios solicitados","error");
    if(numberForm.length  <= 1) return customAlert("El numero de telefono es obligatorio", "Debes llenar todos los espacios solicitados","error");
    resetValuesForm();
    emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,{
      nameForm,
      emailForm,
      destinyForm,
      numberForm,
      manyPersonsForm,
      dateAtGo,
      dateAtComeBack,
    }, import.meta.env.VITE_PUBLIC_KEY);
    customAlert("Cotizacion enviada!!","La Cotizacion fue enviada exitosamente, muy pronto nos comunicaremos contigo","success");
  }
  

  return (
    <div className="cotizar-container">
    <h1>Cotiza Un Vuelo</h1>
      <div className="box-cotizar">
        <form  className="cotizar-form" onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Ingresa tu nombre*"  required value={nameForm} onChange={onInputNameChange} />
        <input type="text" placeholder="Ingresa tu Correo electronico*" value={emailForm} required onChange={onInputEmailChange}/>
        <input type="text" placeholder="Ingresa tu Destino*" required   value={destinyForm} onChange={onInputDestinyChange}/>
        <input type="number" placeholder="Ingresa tu Numero de Telefono*" required onChange={onInputNumberChange} value={numberForm}/>
        <input type="number" placeholder="Numero de personas a viajar?*" onChange={onInputManyPersonsChange} value={manyPersonsForm} required/>
        <p>Ingresa Fecha de Ida:*</p>
        <input type="date" placeholder="Fecha de Ida*" onChange={onInputDateAtGoChange} value={dateAtGo} required/>
        <p>Ingresa Fecha de Vuelta:*</p>
        <input type="date" placeholder="Fecha de vuelta*" required value={dateAtComeBack} onChange={onInputDateAtComeBackChange}/>
        <input type="submit" className="btn-cotizar-vuelo" value="Enviar Cotizacion" onClick={onHandleSubmit} />
        </form>
      </div>
    </div>
  )
}
