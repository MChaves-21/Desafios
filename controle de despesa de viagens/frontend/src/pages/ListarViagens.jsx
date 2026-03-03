import React, { useEffect, useState } from 'react';
import { viagemService } from '../services/api';

const ListarViagens = () => {
    const [viagens, setViagens] = useState([]);

    useEffect(() => {
        carregarViagens();
    }, []);

    const carregarViagens = async () => {
        try {
            const response = await viagemService.listar();
            setViagens(response.data);
        } catch (error) {
            console.error("Erro ao listar viagens", error);
        }
    };

    return (
        <div className="container">
            <h2>Minhas Viagens e Status</h2>
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#eee' }}>
                        <th>ID</th>
                        <th>Data Ida</th>
                        <th>Data Volta</th>
                        <th>Tipo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {viagens.map(v => (
                        <tr key={v.viagem_id}>
                            <td>{v.viagem_id}</td>
                            <td>{new Date(v.data_ida).toLocaleDateString()}</td>
                            <td>{new Date(v.data_volta).toLocaleDateString()}</td>
                            <td>{v.tipo_descricao}</td>
                            <td>Pendente</td> {/* O campo status será integrado com a lógica de aprovação */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarViagens;