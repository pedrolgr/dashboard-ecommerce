export function gerarVendas(qtdVendas, porcentagemLucro, produtosFornecedor, cuponsDesconto) {
    
    const vendas = [];
    for (let i = 0; i < qtdVendas; i++) {
        const venda = {
            produto: null,
            precoVarejo: null,
            cupom: null,
            lucro: null,
            generoComprador: null, 
        }
    
        const randProduto = Math.floor(Math.random() * 12);
        const randCupom = Math.floor(Math.random() * 3);
        const randCupomExiste = Math.floor(Math.random() * 2);
        const randGeneroComprador = Math.floor(Math.random() * 3);
    
        venda.produto = produtosFornecedor[randProduto];
        let precoProduto = parseFloat(produtosFornecedor[randProduto].preco + (produtosFornecedor[randProduto].preco * porcentagemLucro));
    
        if (randGeneroComprador == 0) {
            venda.generoComprador = 'Feminino'
        } else if (randGeneroComprador == 1) {
            venda.generoComprador = 'Masculino'
        } else {
            venda.generoComprador = 'Outros'
        }
    
        if (randCupomExiste == 1) {
            venda.cupom = cuponsDesconto[randCupom];
            venda.precoVarejo = (precoProduto - (precoProduto * venda.cupom.desconto));
        } else {
            venda.precoVarejo = precoProduto;
        }
            
        venda.lucro = venda.precoVarejo - produtosFornecedor[randProduto].preco;
    
        vendas.push(venda);
    }

    return vendas;
}
