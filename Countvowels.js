<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Javascript function that counts the number of vowels in a string.</title>
</head>
<body>
    <script>
      function vowel_count(str){
        return str.match(/[aeiou]/gi).length;
      }
    </script>
</body>
</html>


//Example output
//console.log(vowel_count('The quick brown fox jumps over the lazy dog'));
//
//will show 11
