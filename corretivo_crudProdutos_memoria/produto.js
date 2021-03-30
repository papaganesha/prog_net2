module.exports = class Produto {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;        
        this.nome = nome.toUpperCase();
        this.preco = preco;
    }
}

// module.exports = Produto;