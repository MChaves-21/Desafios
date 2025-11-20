let votos = [];

function votar(opcao) {
    votos.push(opcao);
    atualizarTela();
}

function atualizarTela() {

    const contagem = votos.reduce((acumulador, votoAtual) => {
        acumulador[votoAtual] = (acumulador[votoAtual] || 0) + 1;
        return acumulador;
    }, {});

    const qtdDark = contagem['Dark'] || 0;
    const qtdLight = contagem['Light'] || 0;
    const total = votos.length;

    document.getElementById('votos-dark').innerText = qtdDark;
    document.getElementById('votos-light').innerText = qtdLight;
    document.getElementById('total').innerText = total;

    let porcentagemDark = 50;
    if (total > 0) {
        porcentagemDark = (qtdDark / total) * 100;
    }
    document.getElementById('barra-progresso').style.width = `${porcentagemDark}%`;

    const body = document.body;

    if (qtdDark > qtdLight) {
        body.className = 'tema-escuro';
    } else if (qtdLight > qtdDark) {
        body.className = 'tema-claro';
    } else {
        body.className = '';
    }
}