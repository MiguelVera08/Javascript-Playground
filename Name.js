//Javascript function that gets the values of First and Last name of a form

<html>
  <head>
  <meta charset=utf-8 />
  <title>Return Values of First and Last name of form.</title>
  <style type="text/css">
    body {margin: 30px;}
  </style>
  </head>
<body>
    <form id="form1" onsubmit="getFormvalue()">
      First name: <input type="text" name="fname" value="Miguel"><br>
      Last name: <input type="text" name="lname" value="Vera"><br>
    </form>


<script>
    function getFromvalue(){
        var x = document.getElementById("form1");
        for (var i=0;i<x.length;i++){
          if (x.elements[i].value!='Submit'){
            console.log(x.elements[i].value);
          }
        }
    }
</script>
</body>
</html>
