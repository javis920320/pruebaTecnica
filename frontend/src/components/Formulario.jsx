import React from 'react'

const Formulario = () => {
  return (
    <section className="formulario">
    <header className="form-header ">
      <label className="primary" htmlFor="">
        Paciente
      </label>
      <input
        className="secondary w-full"
        type="text"
        value={namePaciente}
      />
    </header>

    <div className="flex">
      <div className="w-3/5 flex  flex-col items-start">
        <label className="primary" htmlFor="">
          Fecha de nacimiento
        </label>
        <input className="secondary" type="text" value={"20/02/1992"} />
        <label className="primary" htmlFor="">
          Tipo de Identificación
        </label>
        <input className="secondary" type="text" value={"20/02/1992"} />
        <label className="primary" htmlFor="">
          Celular
        </label>
        <input className="secondary" type="text" value={"20/02/1992"} />
        <label className="primary" htmlFor="">
          Dirección
        </label>
        <input className="secondary" type="text" value={"20/02/1992"} />
      </div>

      <div className="flex flex-col   items-start">
        <label className="primary" htmlFor="edad">
          Edad
        </label>
        <input id="edad" className="secondary" type="text" value={30} />
        <label className="primary" htmlFor="">
          N° de identificacion
        </label>
        <input className="secondary" type="text" value={identificacion} />
        <label className="primary" htmlFor="">
          Telefono
        </label>
        <input className="secondary" type="text" value={"20/02/1992"} />
        <label className="primary" htmlFor="">
          Ocupación
        </label>
        <input className="secondary" type="text" value={"20/02/1992"} />
      </div>
    </div>
    <div className="flex flex-col items-start mt-2 relative border-2 py-10">
      <label htmlFor="" className="primary">
        Agregar Observación
      </label>
      <textarea
        className="border-2 border-slate-300 w-full rounded max-h-[127px]"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Observación"
      ></textarea>
      <button className="btn-success">Guardar</button>
    </div>
  </section> 
  )
}

export default Formulario
