const db = require('../config/db');

const Viagem = {
    // Caso de Uso: Solicitar viagem
    criar: async (dados) => {
        const query = `INSERT INTO viagem.tbViagem 
        (data_ida, data_volta, viagem_tipo_id, atualizado_por) 
        VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [
            dados.data_ida,
            dados.data_volta,
            dados.viagem_tipo_id,
            dados.usuario_id
        ]);
        return result;
    },

    // Caso de Uso: Buscar/filtrar viagens
    listarTodas: async () => {
        const query = `
            SELECT v.*, t.descricao as tipo_descricao 
            FROM viagem.tbViagem v
            INNER JOIN viagem.tbViagemTipo t ON v.viagem_tipo_id = t.viagem_tipo_id
        `;
        const [rows] = await db.execute(query);
        return rows;
    }
};

module.exports = Viagem;