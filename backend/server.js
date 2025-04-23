
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();



app.use(cors({
  origin: [
    'http://127.0.0.1:5500', 
    'http://127.0.0.1:5501',
    'http://localhost:3000',
    'http://localhost:5500',
    'http://localhost:5501'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const rotasAutenticacao = require('./rotas/autenticacao.rotas');
const rotasAgendamento = require('./rotas/agendamento.rotas'); 


app.use('/api/usuarios', rotasAutenticacao);
app.use('/api/agendamentos', rotasAgendamento); 


app.get('/', (req, res) => {
  res.send('API funcionando');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 
});
