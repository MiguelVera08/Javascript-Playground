//Javascript Exercise that accepts row and column then takes a input to be put in that cell

<!DOCTYPE html> 
<html> 
<head> 
<meta charset=utf-8 /> 
<title>Change the content of a cell</title> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
</head>
<body> 
  <table id="myTable" border="1">
     <tr><td>Row1 cell1</td> 
     <td>Row1 cell2</td></tr> 
     <tr><td>Row2 cell1</td> 
     <td>Row2 cell2</td></tr> 
     <tr><td>Row3 cell1</td> 
     <td>Row3 cell2</td></tr>
  </table>

  <form>
       <input type="button" onclick="changeContent()" value="Change content">
  </form>

  <script>
         function changeContent(){
          rn = window.prompt("Input the row number example.. (0,1,2)", "0");
          cn = window.prompt("Input the column number(0,1)","0");
          content = window.prompt("Input the Cell content");
          var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
          
         }
  </script>

</body>
</html>
