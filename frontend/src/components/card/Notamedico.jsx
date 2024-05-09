import React from "react";
import Trash from "../../icons/Trash";
import { medicos } from "../../datapacintes.json";
import { removernota } from "../../services/paientesServices";

const Notamedico = ({ paciente }) => {
  const informacionMedico = () => {
    const medico = medicos.find((medico) => medico.id === paciente.idMedico);
    if (medico) {
      return (
        <div>
          <p className="primary">{medico.nombre}</p>
          <p className="secondary">{medico.cargo}</p>
        </div>
      );
    } else {
      return null; // Si no se encuentra el médico, no se muestra información
    }
  };

  const handleClick = () => {
    removernota(paciente).then((res)=>{
        alert(res.message);

    })


  };
  return (
    <div className="section_observaciones">
      <header className="footer_card">
        {informacionMedico()}
        <button className="text-red-500" onClick={handleClick}>
          <Trash />
        </button>
      </header>
      <footer className="text-start">
        {paciente.notaMedica && (
          <p className="secondary">{paciente.notaMedica.observacion}</p>
        )}
      </footer>
    </div>
  );
};

export default Notamedico;
