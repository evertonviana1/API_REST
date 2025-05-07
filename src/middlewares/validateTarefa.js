const Joi = require('joi');

const tarefaSchema = Joi.object({
  titulo: Joi.string().min(3).required(),
  descricao: Joi.string().required(),
  concluida: Joi.boolean().required()
});

function validateTarefa(req, res, next) {
  const { error } = tarefaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Dados inválidos.', detalhes: error.details });
  }
  next();
}

module.exports = validateTarefa;