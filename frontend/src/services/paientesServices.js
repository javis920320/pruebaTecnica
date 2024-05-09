import { URL_API } from "../config";

export const getPacientes = async () => {
  const data = await fetch(`${URL_API}/pacientes`, { method: "GET" });
  const response = await data.json();
  return response;
};
export const actualizacionPaciente = async (paciente, idMedico) => {
  try {
    const data = await fetch(`${URL_API}/pacientes/${idMedico}`, {
      method: "PUT",
      body: JSON.stringify(paciente),
      headers: { "Content-Type": "application/json" },
    });

    if (!data.ok) {
      const errorsData = await data.json();

      throw new Error(errorsData.errors);
    }
    const response = await data.json();

    return response;
  } catch (error) {
    throw new Error(error.message || "Error al conectar al servidor");
  }
};

export const removernota = async (paciente) => {
  const data = await fetch(`${URL_API}/pacientes/`, {
    method: "PUT",
    body: JSON.stringify(paciente),
    headers: { "Content-Type": "application/json" },
  });
  if (data.status == 200) {
    const resp = await data.json();
    return resp;
  }
};
