import React, { useState } from 'react';
import { viagemService } from '../services/api';

const SolicitarViagem = () => {
    const [formData, setFormData] = useState({
        data_ida: '',
        data_volta: '',
        viagem_tipo_id: '',
        usuario_id: 1 // Simulando usuário logado conforme o schema seguranca.tbUsuarios
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await viagemService.solicitar(formData);
            alert('Viagem solicitada com sucesso!');
            setFormData({ data_ida: '', data_volta: '', viagem_tipo_id: '', usuario_id: 1 });
        } catch (error) {
            console.error(error);
            alert('Erro ao solicitar viagem.');
        }
    };

    return (
        <div className="container">
            <h2>Cadastrar Solicitação de Viagem</h2>
            <form onSubmit={handleSubmit} className="form-group">
                <div>
                    <label>Data de Ida:</label>
                    <input type="date" name="data_ida" value={formData.data_ida} onChange={handleChange} required />
                </div>
                <div>
                    <label>Data de Volta:</label>
                    <input type="date" name="data_volta" value={formData.data_volta} onChange={handleChange} required />
                </div>
                <div>
                    <label>Tipo de Viagem (ID):</label>
                    <input type="number" name="viagem_tipo_id" value={formData.viagem_tipo_id} onChange={handleChange} placeholder="Ex: 1" required />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Enviar Solicitação</button>
            </form>
        </div>
    );
};

export default SolicitarViagem;