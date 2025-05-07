const express = require('express');
const morgan = require('morgan');
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/tarefas', tarefasRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});