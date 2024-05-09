import React, { useEffect, useState } from "react";
import Table from "../components/table/Table";
import { usePaciente } from "../hooks/usePaciente";

const Pacientes = () => {
  const { pacientes, getPacienteById,initialState } = usePaciente();  
  return (
    <>
      <div>
        <h1 className="primary">Directorio de Pacientes</h1>
        <Table/>
      </div>
    </>
  );
};

export default Pacientes;
