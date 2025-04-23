const express = require('express');
const router = express.Router();

const { registrar, login, buscarUsuarioPorId } = require('../controllers/autenticacao.controller');
const autenticar = require('../middleware/autenticacao.middleware');

router.post('/registrar', registrar); 
router.post('/login', login);

router.get('/usuarios/:id', autenticar, buscarUsuarioPorId); 
module.exports = router;
