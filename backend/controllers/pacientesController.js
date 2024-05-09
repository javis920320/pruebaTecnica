const {
  leerArchivo,
  escribirArchivo,
  listMedicos,
} = require("../helpers/readFiles");

const getPacientes = (req, res) => {
  const datosdb = leerArchivo();
  console.log(datosdb);
  const { pacientes } = datosdb;
  return res.json(pacientes);
};

const updatePaciente = (req, res) => {
  const { idMedico } = req.params;
  const newPaciente = req.body;
  if (
    (idMedico && newPaciente.observacion !== null) ||
    newPaciente.observacion !== ""
  ) {
    newPaciente.notaMedica = { idMedico, observacion: newPaciente.observacion };
  }

  const datosdb = leerArchivo();

  const { pacientes } = datosdb;
  const index = pacientes.findIndex(
    (paciente) => paciente.idPaciente === newPaciente.idPaciente
  );

  if (index == -1) {
    res.status(400).json({ error: `No existe paciente con el  id ${id} ` });
  }
  pacientes[index] = newPaciente;
  const newDataDb = { ...datosdb, pacientes };
  try {
    escribirArchivo(newDataDb);
    res.json({
      message: "Paciente actualizado correctamente",
      pacienteok: newPaciente,
    });
  } catch (error) {
    console.error("Error al escribir en el archivo:", error);
    return res
      .status(500)
      .json({ error: "Error interno del servidor al guardar el paciente" });
  }
};
const removeNote = (req, res) => {
  const { idPaciente } = req.body;
  const datosdb = leerArchivo();

  const { pacientes } = datosdb;
  
  const index = pacientes.findIndex(
    (paciente) => paciente.idPaciente === idPaciente
  );
  if (index !== -1) {
    pacientes[index].notaMedica = "";
    const newDataDb = { ...datosdb, pacientes }; // Guardar los cambios en el archivo
    escribirArchivo(newDataDb);
    res.status(200).json({ message: "Nota médica eliminada correctamente" });
  } else {
    res.status(404).json({ message: "Paciente no encontrado" });
  }
};

module.exports = {
  updatePaciente,
  getPacientes,
  removeNote
};
