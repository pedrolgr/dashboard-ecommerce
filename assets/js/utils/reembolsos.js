export function gerarReembolsos(qtdVendas, qtdReembolso, vendas) {
    
    for (let i = 0; i < qtdReembolso; i++) {
        let randIndiceRemocao = parseInt(Math.random() * qtdVendas);
        vendas.splice(randIndiceRemocao, 1);
    }
}