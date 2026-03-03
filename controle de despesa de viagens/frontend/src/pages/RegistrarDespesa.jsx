import React, { useState } from 'react';
import axios from 'axios';

const RegistrarDespesa = () => {
    const [despesa, setDespesa] = useState({
        funcionario_id: 1,
        valor: '',
        data_vencimento: '',
        tipo_titulo_id: 1, // 1 para Reembolso, 2 para Adiantamento, etc.
        atualizado_por: 1
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Convertendo data para Timestamp Unix (int11) como pede o seu BD
        const dataUnix = Math.floor(new Date(despesa.data_vencimento).getTime() / 1000);

        try {
            await axios.post('http://localhost:3001/api/financeiro', {
                ...despesa,
                data_vencimento: dataUnix
            });
            alert('Despesa registrada no financeiro!');
        } catch (error) {
            alert('Erro ao registrar.');
        }
    };

    return (
        <div className="container">
            <h3>Registrar Despesa (Financeiro)</h3>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Valor (R$)" onChange={e => setDespesa({ ...despesa, valor: e.target.value })} required />
                <input type="date" onChange={e => setDespesa({ ...despesa, data_vencimento: e.target.value })} required />
                <select onChange={e => setDespesa({ ...despesa, tipo_titulo_id: e.target.value })}>
                    <option value="1">Reembolso</option>
                    <option value="2">Adiantamento</option>
                </select>
                <button type="submit">Lançar no Contas a Pagar</button>
            </form>
        </div>
    );
};

export default RegistrarDespesa;