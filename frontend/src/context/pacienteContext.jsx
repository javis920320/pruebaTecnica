import React, { createContext, useState } from "react";

// Creamos el contexto
const PacienteContext = createContext();

// Creamos el proveedor del contexto
const PacienteProvider = ({ children }) => {
  const [pacienteSel, setPacienteSel] = useState(null);

  return (
    <PacienteContext.Provider value={{ pacienteSel, setPacienteSel }}>
      {children}
    </PacienteContext.Provider>
  );
};

export { PacienteContext, PacienteProvider };