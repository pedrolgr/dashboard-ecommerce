import { produtosFornecedor } from "./utils/produtos.js";
import { cuponsDesconto } from "./utils/cupons.js";
import { gerarVendas } from "./utils/vendas.js";
import { gerarReembolsos } from "./utils/reembolsos.js";
import { mostrarDados } from "./utils/mostrarDados.js";
import { gerarGraficos } from "./utils/graficos.js";

const qtdVendas = Math.floor((Math.random()  * 2000) + 1000);
const qtdReembolso = Math.floor(Math.random() * qtdVendas * 0.5);
const porcentagemLucro = 0.55;

const vendas = gerarVendas(qtdVendas, porcentagemLucro, produtosFornecedor, cuponsDesconto);
gerarReembolsos(qtdVendas, qtdReembolso, vendas);
mostrarDados(qtdVendas, qtdReembolso, vendas);
gerarGraficos(qtdVendas, vendas);