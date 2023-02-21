import { useState } from "react";

export const useFormHome = () => {
const [phoneNumber, setPhoneNumber] = useState<string>("");
const [destiny, setDestiny] = useState<string>("");
const [dateAtGo, setDateAtGo] = useState<string>("");
const [dateAtComeback, setDateAtComeback] = useState<string>("");

  const onInputNumberFormChange = (e:any)=> {
    setPhoneNumber(e.target.value);
  }
  const onInputDestinyFormChange = (e:any)=> {
    setDestiny(e.target.value);
  }
  const onInputDateAtGoFormChange = (e:any)=> {
    setDateAtGo(e.target.value);
  }
  const onInputDateAtComebackFormChange = (e:any)=> {
    setDateAtComeback(e.target.value);
  }
  const resetInputsForm = ()=> {
    setPhoneNumber("");
    setDestiny("");
    setDateAtGo("");
    setDateAtComeback("");
  }
  return {
    // * Propiedades
    phoneNumber,
    destiny,
    dateAtGo,
    dateAtComeback,
    // * Metodos
    onInputNumberFormChange,
    onInputDestinyFormChange,
    onInputDateAtGoFormChange,
    onInputDateAtComebackFormChange,
    resetInputsForm
  }
}
