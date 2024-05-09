const { Router } = require("express");
const {
  updatePaciente,
  getPacientes,
  removeNote,
} = require("../controllers/pacientesController");
const { check } = require("express-validator");
const { validateDatos } = require("../middlewares/validate-datos");
const pacientesRouter = Router();
pacientesRouter.get("/", getPacientes);

pacientesRouter.put(
  "/:idMedico",
  [
    check("namePaciente", "Nombre del Paciente es requerido").not().isEmpty().toLowerCase(),
    check("namePaciente", "el minimo de caracteres permitido es de 6").isLength({min:6}),
    check("idPaciente", "se requiere el id del paciente").notEmpty(),
    check("identificacion", "Identificación requerida").notEmpty(),
    check("ocupacion", "Agrega tu ocupacion").notEmpty().toLowerCase(),
    check("celular", "se requiere un celular de contacto").notEmpty(),


    validateDatos,
  ],
  updatePaciente
);

pacientesRouter.put("/",removeNote)

module.exports = pacientesRouter;
