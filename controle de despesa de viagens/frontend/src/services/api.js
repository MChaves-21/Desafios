import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export const viagemService = {
    // Caso de Uso: Solicitar viagem
    solicitar: (dados) => api.post('/viagens', dados),
    // Caso de Uso: Buscar/filtrar viagens
    listar: () => api.get('/viagens')
};

export default api;