//Get the number of rows and columns from user
var rows = prompt("Enter the number of rows for the table?");
var cols = prompt("Enter the number of columns for the table?");

//If statement incase user does not enter value or leaves input empty
if(rows === "" || rows == null)
    rows = 10;
if(cols === "" || cols == null)
    cols = 10;

createTable(rows, cols);
function createTable(rows, cols) {

    var j = 1;
    var output = "<table border = '1' width='500' cellspacing='0' cellpadding='5'>";

    for (i = 1; i <= rows; i++) {

        output = output + "<tr>";
        while (j <= cols) {
            output = output + "<td>" + i * j + "</td>";
            j = j + 1;
        }
        output = output + "</tr>";
        j = 1;
    }
    var output = output + "</table>";
    document.write(output);
}