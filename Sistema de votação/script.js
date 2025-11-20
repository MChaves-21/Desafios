// Estado da aplicação
let votos = [];

// Função disparada pelo clique no HTML
function votar(opcao) {
    votos.push(opcao);
    atualizarTela();
}

// Função principal de lógica e atualização
function atualizarTela() {

    // 1. CÁLCULO (O coração do sistema usando Reduce)
    const contagem = votos.reduce((acumulador, votoAtual) => {
        acumulador[votoAtual] = (acumulador[votoAtual] || 0) + 1;
        return acumulador;
    }, {});

    // Define valores padrão (0) caso ainda não haja votos
    const qtdDark = contagem['Dark'] || 0;
    const qtdLight = contagem['Light'] || 0;
    const total = votos.length;

    // 2. ATUALIZAÇÃO DOS NÚMEROS
    document.getElementById('votos-dark').innerText = qtdDark;
    document.getElementById('votos-light').innerText = qtdLight;
    document.getElementById('total').innerText = total;

    // 3. CÁLCULO DA BARRA (Porcentagem)
    let porcentagemDark = 50; // Começa empatado visualmente
    if (total > 0) {
        porcentagemDark = (qtdDark / total) * 100;
    }
    document.getElementById('barra-progresso').style.width = `${porcentagemDark}%`;

    // 4. LÓGICA DO FUNDO (BACKGROUND)
    const body = document.body;

    if (qtdDark > qtdLight) {
        // Dark vence: aplica classe escura
        body.className = 'tema-escuro';
    } else if (qtdLight > qtdDark) {
        // Light vence: aplica classe clara (gradiente roxo)
        body.className = 'tema-claro';
    } else {
        // Empate: remove classes (volta ao cinza padrão)
        body.className = '';
    }
}