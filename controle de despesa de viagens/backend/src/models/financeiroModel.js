const db = require('../config/db');

const Financeiro = {
    // Caso de Uso: Registrar despesas/adiantamentos
    registrarConta: async (dados) => {
        const query = `INSERT INTO financeiro.tbContasPagar 
        (funcionario_id, valor, data_vencimento, tipo_titulo_id, atualizado_por, atualizado_em) 
        VALUES (?, ?, ?, ?, ?, ?)`;

        const [result] = await db.execute(query, [
            dados.funcionario_id, // int(11) conforme diagrama
            dados.valor,          // int(11) conforme diagrama
            dados.data_vencimento, // int(11) - Timestamp Unix
            dados.tipo_titulo_id,  // int(11)
            dados.atualizado_por,  // int(10)
            Math.floor(Date.now() / 1000) // atualizado_em int(11)
        ]);
        return result;
    }
};

module.exports = Financeiro;