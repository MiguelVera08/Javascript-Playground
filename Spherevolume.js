//Javascript Program to Calculate the volume of a sphere

<html lang="en">
<head>
<meta charset="utf-8">
<title>Find the Volume of a Sphere</title>
<style>
  body{padding-top: 30px;}
  label,input{display: block;}
</style>
</head>
<body>
  <p>Please put radius value to get volume of a sphere.</p>
  <form action="" method="post" id="MyForm">
    <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
    <label for="volume">Volume</label><input type="text" name="volume" id="volume">
    <input type="submit" value="Calculate" id="submit">    
  </form>

  <script>
      function volume_sphere(){
        var volume;
        var radius = document.getElementById('radius').value;
        radius = Math.abs(radius);
        volume = (4/3) * Math.PI * Math.pow(radius< 3);
        volume = volume.toFixed(4);
        document.getElementById('volume').value = volume;
        return false;
    }
  window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
  </script>
</body>
</html>