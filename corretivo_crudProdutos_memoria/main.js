const Produto = require("./produto");
const CadastroProdutos = require("./cadastro_produtos");

let cadastroProdutos = new CadastroProdutos();

const produto = new Produto(1,"arroz",6.3);

cadastroProdutos.inserir(produto);
cadastroProdutos.inserir(new Produto(5,"batata",4.6));
cadastroProdutos.inserir(new Produto(2,"feijao",8.9));
cadastroProdutos.inserir(new Produto(3,"Coca-Cola",6.5));

for(let prod of cadastroProdutos.listar()){
    console.log (`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
}

//cadastroProdutos.deletar(1);

//console.log(cadastroProdutos.listar());


console.log(cadastroProdutos.listar_porCodigo(2));
console.log(cadastroProdutos.listar_porCodigo(3));
console.log(cadastroProdutos.listar_porCodigo(5));
console.log(cadastroProdutos.deletar(5));


cadastroProdutos.atualizar(2, new Produto(2, "feijao", 5.25));
console.log(cadastroProdutos.listar());