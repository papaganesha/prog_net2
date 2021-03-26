const Produto = require("./Produto");
const CadastroProdutos = require("./cadastro_produtos");

let cadastroProduto = new CadastroProdutos();


//--------------------------------------- FUNCOES ---------------------------------------------

function listar() {
    for(let prod of cadastroProduto.listar()){
        console.log(prod);
    }}

function listar_por_nome(nome) {
    let nome_x = nome.toUpperCase();
    for(let prod of cadastroProduto.listar()){
        if(prod.nome === nome_x){
        console.log(prod);
    }}}


//--------------------------------------- INSTANCIANDO ---------------------------------------------

cadastroProduto.inserir_produto("001", "BANANA", 2.5);
cadastroProduto.inserir_produto("002", "LARANJA", 2.8);
cadastroProduto.inserir_produto("003", "MANGA", 3.4);
cadastroProduto.inserir_produto("004", "ABACATE", 4.0);
cadastroProduto.inserir_produto("005", "PESSEGO", 4.5);
cadastroProduto.inserir_produto("006", "Maça", 4.5);


//------------------------------------------ RODANDO ------------------------------------------------




