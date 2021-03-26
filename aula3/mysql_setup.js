var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_1"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Mysql!");
});


function insert_produto_toMysql(nome, preco){
    con.connect(function(err) {
        let nome_x = nome.toUpperCase();
        var sql = "INSERT INTO produto (nome, preco) VALUES (?,?)";
        con.query(sql,[nome_x, preco], function (err, result) {
            if (err) throw err;
            console.log("Produto "+nome_x+" inserido");
        });
});
}

function query_produtos(){
    con.connect(function(err) {
        var sql = "SELECT * FROM produto";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}

function query_produtos_porCodigo(codigo){
    con.connect(function(err) {
        var sql = "SELECT * FROM produto where codigo = ?";
        con.query(sql,[codigo], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}


insert_produto_toMysql("pessego", 4.7);
query_produtos();
query_produtos_porCodigo(7)