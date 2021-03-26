<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Formulario de adicao de produto</title>


  </head>
  <body>
    <br>
    <fieldset name="Inserir Produto">
      <legend>Inserir Produto</legend>
    <form class="add_produto" action="add_produto.php" method="post">
      <br>
      <label for="nome_produto">Nome do produto:</label>
      <input type="text" name="nome_produto" value="" required>
      <br>
      <label for="preco_produto">Preco do produto:</label>
      <input type="INT" name="preco_produto" value="" required >
      <br><br>
      <input type="submit" name="add" value="Adicionar">
      <br>
    </form>
    </fieldset>
    <br>
    <fieldset>
      <legend>Listar Produtos</legend>
      <br>
      <table border="1">
        <tr>
          <td>Código</td>
          <td>Nome</td>
          <td>Preco</td>
        </tr>
<?php
      include("mysql_db_connect.php");
      $sql = "Select * from produto";
      $rSet = mysqli_query($conn, $sql);
      if(mysqli_num_rows($rSet) > 0){
?>
<?php
        while($rows = mysqli_fetch_assoc($rSet)){ ?>
                 <tr>
                   <td><?php echo $rows['codigo']; ?></td>
                   <td><?php echo $rows['nome']; ?></td>
                   <td><?php echo $rows['preco']; ?></td>
                 </tr>
                 <?php }}
                       else {
                           echo "0 results";
                     }
                 ?>

               </table>
               <br>
    </fieldset>
  </body>
</html>
