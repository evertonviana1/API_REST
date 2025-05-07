const tarefasService = require('../services/tarefasService');
const log = require('../utils/logger');

function listarTarefas(req, res) {
  const filtro = req.query.concluida;
  const lista = tarefasService.listarTarefas(filtro);
  res.json({ tarefas: lista });
}

function buscarTarefa(req, res) {
  const tarefa = tarefasService.getTarefaById(req.params.id);
  if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada.' });
  res.json(tarefa);
}

function criarTarefa(req, res) {
  const nova = tarefasService.criarTarefa(req.body);
  log('Tarefa criada com sucesso.');
  res.status(201).json(nova);
}

function atualizarTarefa(req, res) {
  const atualizada = tarefasService.updateTarefa(req.params.id, req.body);
  if (!atualizada) return res.status(404).json({ message: 'Tarefa não encontrada.' });
  log('Tarefa atualizada.');
  res.json(atualizada);
}

function concluirTarefa(req, res) {
  const concluida = tarefasService.concluirTarefa(req.params.id);
  if (!concluida) return res.status(404).json({ message: 'Tarefa não encontrada.' });
  log('Tarefa marcada como concluída.');
  res.json(concluida);
}

function deletarTarefa(req, res) {
  const sucesso = tarefasService.deletarTarefa(req.params.id);
  if (!sucesso) return res.status(404).json({ message: 'Tarefa não encontrada.' });
  log('Tarefa deletada.');
  res.status(204).send();
}

module.exports = {
  listarTarefas,
  buscarTarefa,
  criarTarefa,
  atualizarTarefa,
  concluirTarefa,
  deletarTarefa
};