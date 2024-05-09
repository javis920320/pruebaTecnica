import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { PacienteContext } from "../../context/pacienteContext";
import { actualizacionPaciente } from "../../services/paientesServices";
import { usePaciente } from "../../hooks/usePaciente";
import Trash from "../../icons/Trash";
import { useParams } from "react-router-dom";
import Notamedico from "./Notamedico";

const Card = () => {
  const { pacienteSel, setPacienteSel } = useContext(PacienteContext);
  const [formulario, setFormulario] = useState(null);
  const [erroresformulario, setErroresformulario] = useState(null);
  const [messageFetch, setmessageFetch] = useState(null);
  const { actualizarPaciente,reloadData } = usePaciente();
  const { idDoctor } = useParams();

  useEffect(() => {
    if (pacienteSel) {
      setFormulario(pacienteSel[0]);
    }
  }, [pacienteSel]);

  const { onChange } = useForm(formulario);

  const handleSubmit = (e) => {
    e.preventDefault();
    //realizar validaciones si todo esta ok  enviamos la peticion al servidor
    actualizacionPaciente(formulario,idDoctor)
      .then((resp) => {
        const { pacienteok } = resp;
        if (pacienteok) {
          actualizarPaciente(pacienteok);
          setmessageFetch(resp.message);
          reloadData()

          setTimeout(() => {
            setmessageFetch(null);
          }, 4000);
        }
      })
      .catch((error) => console.log(JSON.stringify(error)));
  };

  if (!formulario) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    namePaciente,
    celular,
    identificacion,
    entidadSalud,
    fechaNacimiento,
    edad,
    tipoIdentificacion,
    direccion,
    telefono,
    ocupacion,
    observacion,
  } = formulario;

  return (
    <div className="card">
      <h1 className="primary">Información Paciente </h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input type="hidden" name="idmedico" value={idDoctor} />
        <header className="form-header ">
          <label className="primary" htmlFor="">
            Paciente
          </label>
          <input
            className="secondary w-full"
            type="text"
            name="namePaciente"
            value={namePaciente}
            required
            onChange={handleChange}
          />
        </header>

        <div className="flex">
          <div className="w-3/5 flex  flex-col items-start">
            <label className="primary" htmlFor="">
              Fecha de nacimiento
            </label>
            <input
              className="secondary"
              type="date"
              name="fechaNacimiento"
              required
              max={new Date().toISOString().split("T")[0]}
              value={fechaNacimiento}
              onChange={handleChange}
            />
            <label className="primary" htmlFor="">
              Tipo de Identificación
            </label>
            <input
              className="secondary"
              type="text"
              name="tipoidentificacion"
              value={tipoIdentificacion}
              onChange={handleChange}
            />
            <label className="primary" htmlFor="">
              Celular
            </label>
            <input
              className="secondary"
              name="celular"
              type="text"
              required
              value={celular}
              onChange={handleChange}
            />
            <label className="primary" htmlFor="">
              Dirección
            </label>
            <input
              className="secondary"
              name="direccion"
              type="text"
              required
              value={direccion}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col   items-start">
            <label className="primary" htmlFor="edad">
              Edad
            </label>
            <input
              id="edad"
              name="edad"
              required
              className="secondary"
              type="text"
              value={edad}
              onChange={handleChange}
            />
            <label className="primary" htmlFor="">
              N° de identificacion
            </label>
            <input
              className="secondary"
              type="text"
              required
              name="identificacion"
              value={identificacion}
              onChange={handleChange}
            />
            <label className="primary" htmlFor="">
              Telefono
            </label>
            <input
              className="secondary"
              type="text"
              name="telefono"
              value={telefono}
              onChange={handleChange}
            />
            <label className="primary" htmlFor="">
              Ocupación
            </label>
            <input
              className="secondary"
              type="text"
              required
              name="ocupacion"
              value={ocupacion}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col items-start mt-2 relative py-8 pb-10">
          <label htmlFor="" className="primary">
            Agregar Observación
          </label>
          <textarea
            className="border-2 border-slate-300 w-full rounded max-h-[127px]"
            name="observacion"
            id=""
            cols="30"
            rows="10"
            placeholder="Observación"
            onChange={handleChange}
          ></textarea>
          <button className="btn-success ">Guardar</button>
        </div>
      </form>
      {messageFetch && <p className="text-green-400 bg-green-100 p-2">{messageFetch} </p>}
      
      {pacienteSel[0].notaMedica && (
        <Notamedico paciente={pacienteSel[0]}/>

        
        
      )}
    </div>
  );
};

export default Card;
