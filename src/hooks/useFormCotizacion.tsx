import { useState } from "react";

export const useFormCotizacion = () => {
    const [nameForm, setNameForm] = useState<string>("");
    const [emailForm, setEmailForm] = useState<string>("");
    const [destinyForm, setDestinyForm] = useState<string>("");
    const [manyPersonsForm, setManyPersonsForm] = useState<string>("");
    const [numberForm, setNumberForm] = useState<string>("");
    const [dateAtGo, setDateAtGo] = useState<string>("");
    const [dateAtComeBack, setDateAtComeBack] = useState<string>("");
  const onInputNameChange = (e:any) => {
    setNameForm(e.target.value);
  }
  const onInputEmailChange = (e:any) => {
    setEmailForm(e.target.value);
  }
  const onInputDestinyChange = (e:any) => {
    setDestinyForm(e.target.value);
  }
  const onInputManyPersonsChange = (e:any) => {
    setManyPersonsForm(e.target.value);
  }
  const onInputNumberChange = (e:any) => {
    setNumberForm(e.target.value);
  }
  const onInputDateAtGoChange = (e:any) => {
    setDateAtGo(e.target.value);
  }
  const onInputDateAtComeBackChange = (e:any) => {
    setDateAtComeBack(e.target.value);
  }

  const resetValuesForm = () => {
    setNameForm("");
    setEmailForm("");
    setDestinyForm("");
    setManyPersonsForm("");
    setNumberForm("");
    setDateAtGo("");
    setDateAtComeBack("");
  }
  
  return {
    // * Propiedades
    nameForm,
    emailForm,
    destinyForm,
    manyPersonsForm,
    numberForm,
    dateAtComeBack,
    dateAtGo,

    // * Metodos
    onInputNameChange,
    onInputEmailChange,
    onInputDestinyChange,
    onInputManyPersonsChange,
    onInputNumberChange,
    onInputDateAtComeBackChange,
    onInputDateAtGoChange,
    resetValuesForm,
  }
}
