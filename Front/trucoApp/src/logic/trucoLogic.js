export const calcularPontosEnvido = (mao, amostra) => {
    const nAmostra = amostra.naipe;

    // No Truco de Amostra, peças valem pontos específicos: 2(30), 4(29), 5(28), 11(27), 10(27)
    const valoresPecas = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 };

    // Separar cartas por naipe para ver se há "liga" (duas do mesmo naipe)
    const naipes = {};
    mao.forEach(c => {
        const pontosBase = c.naipe === nAmostra && valoresPecas[c.valor] ? valoresPecas[c.valor] : (c.valor >= 10 ? 0 : c.valor);
        if (!naipes[c.naipe]) naipes[c.naipe] = [];
        naipes[c.naipe].push(pontosBase);
    });

    let maxPontos = 0;

    // Se tiver peça da amostra, a lógica muda conforme o regulamento
    // Simplificação: maior carta individual ou soma de duas do mesmo naipe + 20
    Object.keys(naipes).forEach(n => {
        const pontos = naipes[n].sort((a, b) => b - a);
        if (pontos.length >= 2) {
            const soma = pontos[0] + pontos[1] + 20;
            if (soma > maxPontos) maxPontos = soma;
        } else {
            if (pontos[0] > maxPontos) maxPontos = pontos[0];
        }
    });

    return maxPontos;
};

export const verificarFlor = (mao, amostra) => {
    const nAmostra = amostra.naipe;
    const naipes = mao.map(c => c.naipe);
    const pecas = mao.filter(c => c.naipe === nAmostra && [2, 4, 5, 10, 11].includes(c.valor));

    // Flor: 3 do mesmo naipe OU combinações com peças da amostra
    const mesmoNaipe = new Set(naipes).size === 1;
    const temPecas = pecas.length >= 1; // Simplificando regra de flor com peça

    return mesmoNaipe || pecas.length >= 2;
};