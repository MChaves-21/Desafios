import React, { useState } from 'react';
import SolicitarViagem from './pages/SolicitarViagem';
import ListarViagens from './pages/ListarViagens';
import './App.css';

function App() {
    const [tab, setTab] = useState('solicitar');

    return (
        <div className="App">
            <nav style={{ padding: '20px', background: '#2c3e50', color: 'white' }}>
                <h1>Sistema de Controle de Viagens</h1>
                <button onClick={() => setTab('solicitar')}>Solicitar Viagem</button>
                <button onClick={() => setTab('listar')}>Acompanhar Viagens</button>
            </nav>

            <main style={{ padding: '20px' }}>
                {tab === 'solicitar' ? <SolicitarViagem /> : <ListarViagens />}
            </main>
        </div>
    );
}

export default App;