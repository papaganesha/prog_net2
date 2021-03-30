module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }

    alterar(indice){
        this.produtos.nome(indice,1);
    }

    deletar(codigo){
        const indice = this.buscarIndicePorCodigo(codigo);
        if (indice == -1){
            console.err("Codigo nao encontrado");
        }
        else{
            return(this.produtos.splice(indice, 1));
        }
    }

    
    listar() {
        return this.produtos;
    }

    listar_porCodigo(codigo){
        function verificarID(produto){
            return produto.codigo == codigo;
        }
        return this.produtos.find(verificarID);
    }

    buscarIndicePorCodigo(codigo){
        let verificaId = function (produto){
            return produto.codigo == codigo;
        }

        return this.produtos.findIndex(verificaId);
    }

    atualizar(codigo, produtoAtual){
        const indice = this.buscarIndicePorCodigo(codigo);
        if (indice == -1){
            console.log("Codigo não encontrado");
        }
        else{
            this.produtos[indice] = produtoAtual;
        }
    }


}