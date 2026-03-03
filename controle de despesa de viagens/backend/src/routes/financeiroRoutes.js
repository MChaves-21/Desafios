const express = require('express');
const router = express.Router();
const financeiroController = require('../controllers/financeiroController');

// Caso de Uso: Pagar reembolso / baixar adiantamento
router.post('/registrar', financeiroController.criarConta);

// Caso de Uso: Buscar/filtrar despesas para o Financeiro
// router.get('/pendentes', financeiroController.listarPendentes); 

module.exports = router;