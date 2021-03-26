const Produto = require("./Produto");


class CadastroProdutos {
    constructor() {
        this.Produtos = [];
    }

    listar() {
        return this.Produtos;
    }


    EachPrint(item) {
        console.log(item);
    }


    inserir_produto(codigo, nome, preco) {
        nome = nome.toUpperCase();
        this.Produtos.push(new Produto(codigo, nome, preco));
        console.log("\nProduto " + nome + " adicionado\n");
    }


    deletar(indice){
        this.Produtos.slice(indice);
    }

}


module.exports = CadastroProdutos;