var con = require("./mysql_setup");
var Produtos = [];

class Produto{
    constructor(codigo, nome, preco){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    return_Produto(){
        return this.codigo, this.nome, this.preco;
    }
}



const conn = new con("localhost", "root", "", "crud_1");

function inserirProduto_BD(nome, preco){
    let nomex = nome.toUpperCase();
    conn.connect(function(err) {
        var sql = "INSERT INTO produto (nome, preco) VALUES (?,?)";
        conn.query(sql,[nomex, preco], function (err, result) {
            if (err) throw err;
            console.log("Produto "+nomex+" inserido na tabela(BD) de Produtos");
        });
    });
}

function inserirProduto_Array(codigo, nome, preco) {
    Produtos.push(new Produto(codigo, nome, preco));
}

/*function update_array_Produtos(){
    conn.connect(function(err) {
        var sql = "SELECT * FROM produto";
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("\nTransferindo dados(BD) para array de objetos");
            var  nome_x, preco_x, codigo_x;
            for(var x in result) {
                codigo_x = result[x].codigo;
                nome_x = result[x].nome;
                preco_x = result[x].preco;
                inserirProduto_Array(result[x].codigo,result[x].nome, result[x].preco);
                console.log("Produto "+nome_x+" adicionado do BD para array");
                console.log(codigo_x, nome_x, preco_x);

            }
        });
    });
}
*/


function query_produtos(){
    conn.connect(function(err) {
        var sql = "SELECT * FROM produto";
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("\nQuery(BD) de produtos");
            result = JSON.parse(JSON.stringify(result));
            result.forEach(EachPrint);
        });
    });
}






function query_produtos_porCodigo(codigo){
    conn.connect(function(err) {

        var sql = "SELECT * FROM produto where codigo = ?";
        conn.query(sql,[codigo], function (err, result) {
            if (err) throw err;
            console.log("\nQuery(BD) de produtos por codigo: "+codigo);
            result = JSON.parse(JSON.stringify(result));
            result.forEach(EachPrint);

        });
    });
}

function query_produtos_porNome(nome){
    conn.connect(function(err) {
        let nomex = nome.toUpperCase();
        var sql = "SELECT * FROM produto where nome = ?";
        conn.query(sql,[nomex], function (err, result) {
            if (err) throw err;
            console.log("Query de produtos por nome: "+nomex);
            result = JSON.parse(JSON.stringify(result));
            result.forEach(EachPrint);

        });
    });
}

function query_Array_Produtos(item){
    console.log("Query(Array) de produtos");
    for(x of item){
        console.log(x);
    }
}

function EachPrint(item){
    console.log(item);
}



//inserirProduto("banana", 1.4);
//inserirProduto("LARANJA", 2.8);
//inserirProduto("MANGA", 3.4);
//inserirProduto( "ABACATE", 4.0);
//inserirProduto("PESSEGO", 4.5);
//inserirProduto("Maça", 4.5)
//inserirProduto("Bergamota", 3.7);


//query_produtos_porCodigo(6);
//query_produtos_porNome("laranja");

//query_produtos();
//Produtos.forEach(EachPrint);
//update_array_Produtos();

inserirProduto_Array(12, "SEM PACIENCIA", 2.5);





query_produtos();
query_produtos_porNome("Bergamota");
query_produtos_porCodigo(9)









