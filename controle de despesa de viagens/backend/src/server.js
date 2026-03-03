const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importação das Rotas (MVC)
const viagemRoutes = require('./routes/viagemRoutes');
const financeiroRoutes = require('./routes/financeiroRoutes');
// const segurancaRoutes = require('./routes/segurancaRoutes'); // Para futuras implementações de Login

const app = express();

// Configuração do CORS para permitir que o React (Porta 5173) acesse a API
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

// Definição das Rotas por Domínio conforme a Documentação
app.use('/api/viagens', viagemRoutes);      // Casos de uso: Solicitar, Listar, Editar roteiro
app.use('/api/financeiro', financeiroRoutes); // Casos de uso: Registrar despesa, Pagar, Reembolsar

// Rota de Teste de Conexão
app.get('/api/status', (req, res) => {
    res.json({ status: 'Online', message: 'API de Controle de Despesas operante.' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📁 Banco de Dados alvo: ${process.env.DB_NAME}`);
});