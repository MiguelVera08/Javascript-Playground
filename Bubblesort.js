<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Bubble Sort</title>
  </head>
  <body>
    <script>
      Array.prototype.bubbleSort_algo = function(){
    
        var is_sorted = false;
        while (!is_sorted){
          is_sorted = true;
          for (var n = 0; n <this.length -1; n++){
            if (this[n] > this[n+1]){
              var x = this[n+1];
            }
          }
        }
      }
    </script>
  </body>
</html>  
