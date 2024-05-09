import { useEffect, useState } from "react";
import { getPacientes } from "../services/paientesServices";

export const usePaciente = () => {
  const [pacientes, setPacientes] = useState(null);

  const getPacienteById = (id) => {
    
    const pacientefiltrado = pacientes.filter(
      (paciente) => paciente.idPaciente == id
    );
    return pacientefiltrado;
  };
  

  const fetchData = async () => {
    try {
      const data = await getPacientes();
      setPacientes(data);
    } catch (error) {
      throw new Error("Error initializing");
    }
  };

  useEffect(() => {
   

    if (!pacientes) {
      fetchData();
    }
  }, [pacientes]);

  const reloadData=()=>{
   fetchData()
  }

  const actualizarPaciente = (pacienteActualizado) => {
    const nuevosPacientes = pacientes.map((paciente) =>
      paciente.idPaciente === pacienteActualizado.idPaciente ? pacienteActualizado : paciente
    );
    setPacientes(nuevosPacientes);
  };

  return { pacientes,getPacienteById,actualizarPaciente,reloadData};
};
