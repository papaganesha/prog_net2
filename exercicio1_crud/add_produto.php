<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Adicionando Produto</title>
  </head>
  <body>

    <?php
    include("mysql_db_connect.php");
    if(isset($_POST)){
        $nome_produto = $_POST['nome_produto'];
        $preco_produto = $_POST['preco_produto'];
    }

    $query = "Select * from produto where nome = '$nome_produto'";
    $rSet = mysqli_query($conn, $query);
    if(mysqli_num_rows($rSet) > 0){
      echo "Produto $nome_produto ja existe";
      echo "<br>&nbsp;&nbsp;&nbsp;<button type='button' name='voltar'><a href='index.php'>voltar</a></button>";
    }
    else {
        $sql = "INSERT INTO Produto (nome, preco) VALUES ('$nome_produto', '$preco_produto')";
          if (mysqli_query($conn, $sql)) {
            echo "Produto $nome_produto adicionado com sucesso";
            echo "<br>&nbsp;&nbsp;&nbsp;<button type='button' name='voltar'><a href='index.php'>voltar</a></button>";
            }
          else{
          echo "Error: " . $sql . "<br>" . mysqli_error($conn);
          echo "<br>&nbsp;&nbsp;&nbsp;<button type='button' name='voltar'><a href='index.php'>voltar</a></button>";
          }}
    mysqli_close($conn);
     ?>
  </body>
</html>
