function calcular() {
    const quantidadeHomens = parseInt(document.getElementById('numero-homens').value) || 0;
    const quantidadeMulheres = parseInt(document.getElementById('numero-mulheres').value) || 0;
    const quantidadeCriancas = parseInt(document.getElementById('numero-criancas').value) || 0;

    const carne = calcularCarne(quantidadeHomens, quantidadeMulheres, quantidadeCriancas);
    const frango = calcularFrango(quantidadeHomens, quantidadeMulheres, quantidadeCriancas);
    const linguica = calcularLinguica(quantidadeHomens, quantidadeMulheres, quantidadeCriancas);
    const refrigerante = calcularRefrigerante(quantidadeHomens, quantidadeMulheres, quantidadeCriancas);
    const cerveja = calcularCerveja(quantidadeHomens, quantidadeMulheres);

    atualizarResultados(carne, frango, linguica, refrigerante, cerveja);
}

function calcularCarne(homens, mulheres, criancas) {
    return ((homens * 500) + (mulheres * 300) + (criancas * 200)) / 1000;
}

function calcularFrango(homens, mulheres, criancas) {
    return ((homens * 200) + (mulheres * 200) + (criancas * 100)) / 1000;
}

function calcularLinguica(homens, mulheres, criancas) {
    return ((homens * 200) + (mulheres * 200) + (criancas * 200)) / 1000;
}

function calcularRefrigerante(homens, mulheres, criancas) {
    return ((homens * 300) + (mulheres * 400) + (criancas * 200)) / 1000;
}

function calcularCerveja(homens, mulheres) {
    return ((homens * 800) + (mulheres * 500)) / 1000;
}

function atualizarResultados(carne, frango, linguica, refrigerante, cerveja) {
    document.getElementById('carne').innerText = `${carne.toFixed(1)} Kilos de Carne Bovina`;
    document.getElementById('frango').innerText = `${frango.toFixed(1)} Kilos de Frango`;
    document.getElementById('linguica').innerText = `${linguica.toFixed(1)} Kilos de Linguiça`;
    document.getElementById('refrigerante').innerText = `${refrigerante.toFixed(1)} Litros de Refrigerante`;
    document.getElementById('cerveja').innerText = `${cerveja.toFixed(1)} Litros de Cerveja`;
}
