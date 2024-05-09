const { validationResult } = require('express-validator');

const validateDatos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }

  next(); // Llama a next solo si no hay errores de validación
};

module.exports = {
  validateDatos
};