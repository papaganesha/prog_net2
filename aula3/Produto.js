//--------------------------------------- CLASSES ---------------------------------------------


class Produto{
    constructor(codigo, nome, preco){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }

}

//--------------------------------------- FUNCOES ---------------------------------------------


function EachPrint(item) {
    console.log(item);
}

function create_new_product(codigo, nome, preco) {
    let instancia = new Produto(codigo, nome, preco);
    Produtos.push(instancia);
}


//--------------------------------------- RESTO ---------------------------------------------




module.exports = Produto;



