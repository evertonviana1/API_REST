const { v4: uuidv4 } = require('uuid');
const tarefas = require('../database/fakeDb');

function listarTarefas(filtro) {
  if (filtro) {
    return tarefas.filter(t => t.concluida === (filtro === 'true'));
  }
  return tarefas;
}

function getTarefaById(id) {
  return tarefas.find(t => t.id === id);
}

function criarTarefa(dados) {
  const novaTarefa = { id: uuidv4(), ...dados };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function updateTarefa(id, dados) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) return null;
  tarefas[index] = { id, ...dados };
  return tarefas[index];
}

function concluirTarefa(id) {
  const tarefa = getTarefaById(id);
  if (!tarefa) return null;
  tarefa.concluida = true;
  return tarefa;
}

function deletarTarefa(id) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) return false;
  tarefas.splice(index, 1);
  return true;
}

module.exports = {
  listarTarefas,
  getTarefaById,
  criarTarefa,
  updateTarefa,
  concluirTarefa,
  deletarTarefa
};