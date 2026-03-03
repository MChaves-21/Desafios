const Viagem = require('../models/viagemModel');

exports.criarViagem = async (req, res) => {
    try {
        const { data_ida, data_volta, viagem_tipo_id, usuario_id } = req.body;

        // Validação simples
        if (!data_ida || !data_volta || !viagem_tipo_id || !usuario_id) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const resultado = await Viagem.criar(req.body);
        res.status(201).json({
            message: "Viagem solicitada com sucesso!",
            id: resultado.insertId
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar solicitação: " + error.message });
    }
};

exports.listarViagens = async (req, res) => {
    try {
        const viagens = await Viagem.listarTodas();
        res.json(viagens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};