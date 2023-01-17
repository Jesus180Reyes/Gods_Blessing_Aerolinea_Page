
export const CustomForm = () => {
  return (
    <>
     <form >
    <div className="form-container">
      <div className="input-controller" >
        <p>Origen:</p>
        <input type="text" placeholder="Ingrese Origen" />
      </div>
      <div className="input-controller" >
        <p>Destino:</p>
        <input type="text" placeholder="Ingrese Destino" />
      </div>
      <div className="input-controller" >
        <p>Ida:</p>
        <input type="date" />
      </div>
      <div className="input-controller" >
        <p>Vuelta:</p>
        <input type="date" />
      </div>
      <button className="btn-form">Cotizar Vuelo</button>
    </div>
    </form>    
    </>
  )
}
