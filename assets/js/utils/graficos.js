const dataCategoria = [0, 0, 0, 0];
const dataGenero = [0, 0, 0];
const vendasPorItem = {};
const arrayNomeProduto = [];
const arrayQtdProduto = [];

function gerarDadosGrafico(qtdVendas, vendas) {

    for (let i = 0; i < qtdVendas; i++) {

        if(vendas[i] === undefined){
            continue
        }
            
        if(vendas[i].produto.categoria == 'Eletrônicos') {
            dataCategoria[0] += 1;
        } else if (vendas[i].produto.categoria == 'Doméstico') {
            dataCategoria[1] += 1;
        } else if (vendas[i].produto.categoria == 'Utensílios') {
            dataCategoria[2] += 1;
        } else {
            dataCategoria[3] += 1;
        }

        
        if(vendas[i].generoComprador == 'Masculino') {
            dataGenero[0] += 1;
        } else if (vendas[i].generoComprador == 'Feminino') {
            dataGenero[1] += 1;
        } else {
            dataGenero[2] += 1;
        }
    }

    for(let i = 0; i < vendas.length ; i++) {

        const nomeItem = vendas[i].produto.produto

        if(!vendasPorItem[nomeItem]) {
            vendasPorItem[nomeItem] = {nome: vendas[i].produto.produto,
                quantidade: 1}
        } else {
            vendasPorItem[nomeItem].quantidade++;
        }
    }
    const arrayVendasPorItem = Object.values(vendasPorItem);
    arrayVendasPorItem.sort((a, b) => b.quantidade - a.quantidade);

    arrayVendasPorItem.forEach((vendas) => {
        let { nome, quantidade } = vendas

        arrayNomeProduto.push(nome)
        arrayQtdProduto.push(quantidade)
    })

}

function gerarGraficos(qtdVendas, vendas) {

    gerarDadosGrafico(qtdVendas, vendas);

    const graficoCategoria = document.getElementById('categoryChart');
    new Chart(graficoCategoria, {
      type: 'doughnut',
      data: {
        labels: ['Eletrônicos', 'Doméstico', 'Utensílios', 'Esportes & Lazer'],
        datasets: [{
          label: '',
          data: dataCategoria,
          backgroundColor: [
              'rgb(19,84,138)',
              'rgb(42,146,213)',
              'rgb(55,201,238)',
              'rgb(63,217,215)'
          ]
        }]
      },
      options: {
          plugins: {
              legend: {
                  display: false
              }
          },
          responsive: true
      }
    });

    const graficoGenero = document.getElementById('genderChart');
    new Chart(graficoGenero, {
        type: 'doughnut',
        data: {
        labels: ['Masculino', 'Feminino', 'Outros'],
        datasets: [{
            label: '',
            data: dataGenero,
            backgroundColor: [
                'rgb(42,146,213)',
                'rgb(55,201,238)',
                'rgb(63,217,215)'
            ]
        }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true
        }
    });
    
    const graficoItens = document.getElementById('itensChart');
    new Chart(graficoItens, {
        type: 'bar',
        data: {
        labels: arrayNomeProduto.slice(0, 6),
        datasets: [{
            label: '',
            data: arrayQtdProduto.slice(0, 6),
            backgroundColor: [
                'rgb(42,146,213)',
                'rgb(55,201,238)',
                'rgb(63,217,215)'
            ]
        }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true
        }
    });
}

export { gerarGraficos }