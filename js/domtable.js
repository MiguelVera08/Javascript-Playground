function changeContent(){
    rn = window.prompt("Input the row number example.. (0,1,2)", "0");
    cn = window.prompt("Input the column number(0,1)","0");
    content = window.prompt("Input the Cell content");
    var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}