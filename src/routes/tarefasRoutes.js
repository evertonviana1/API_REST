const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefasController');
const validateTarefa = require('../middlewares/validateTarefa');

router.get('/', controller.listarTarefas);
router.get('/:id', controller.buscarTarefa);
router.post('/', validateTarefa, controller.criarTarefa);
router.put('/:id', validateTarefa, controller.atualizarTarefa);
router.patch('/:id/concluir', controller.concluirTarefa);
router.delete('/:id', controller.deletarTarefa);

module.exports = router;