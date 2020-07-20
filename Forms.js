<html>
  <title>Enter Information</title>
  <script type="text/javascript">
    
    //Divs for input error messages
    var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";
    
    //Function to validate input from user
    function validate(){
      var inputs = new Array();
      inputs[0] = docuement.getElementById('first').value;
      inputs[1] = docuement.getElementById('last').value;
      inputs[2] = document.getElementById('email').value;
      inputs[3] = document.getElementById('uid').value;
      inputs[4] = document.getElementById('password').value;
      inputs[5] = document.getElementById('confirm').value;
      
      //Array that holds the error messages for wrong inputs
      errors[0] = "<span style='color:red'>Please enter your first name!</span>";
      errors[1] = "<span style='color:red'>Please enter your last name!</span>";
      errors[2] = "<span style='color:red'>Please enter your email!</span>";
      errors[3] = "<span style='color:red'>Please enter your user id!</span>";
      errors[4] = "<span style='color:red'>Please enter your password!</span>";
      errors[5] = "<span style='color:red'>Please confirm your password!</span>";
  </script>
</html>
