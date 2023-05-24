export function mostrarDados(qtdVendas, qtdReembolso, vendas) {

    const totalVendas = document.querySelector('.total-vendas');
    totalVendas.innerHTML = qtdVendas;

    const totalReembolso = document.querySelector('.reembolso');
    totalReembolso.innerHTML = qtdReembolso;

    let faturamento = vendas.map(venda => venda.precoVarejo).reduce((acc, preco) => acc + preco, 0);
    const totalFaturamento = document.querySelector('.faturamento');
    totalFaturamento.innerHTML = faturamento.toFixed(2);

    let lucro = vendas.map(venda => venda.lucro).reduce((acc, preco) => acc + preco, 0);
    const totalLucro = document.querySelector('.lucro');
    totalLucro.innerHTML = lucro.toFixed(2);

    const tabela = document.getElementById('table-sellings');
    const ultimasVendas = vendas.slice(-5);
    ultimasVendas.forEach((venda) => {
        const linha = tabela.insertRow();
        if(venda.cupom !== null) {
            linha.innerHTML = `<td>${venda.produto.produto}</td><td>${venda.produto.categoria}
            </td><td>${venda.produto.preco}</td><td>${venda.cupom.cupom}</td>`;
            
        } else {
            linha.innerHTML = `<td>${venda.produto.produto}</td><td>${venda.produto.categoria}
            </td><td>${venda.produto.preco}</td><td> - </td>`;
        }
        
    });
}
