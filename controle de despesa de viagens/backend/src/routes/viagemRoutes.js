const express = require('express');
const router = express.Router();
const viagemController = require('../controllers/viagemController');

router.post('/', viagemController.criarViagem);
router.get('/', viagemController.listarViagens);

module.exports = router;