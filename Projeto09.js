var num1=parseFloat(prompt("Informe um número natural:"));
var num2=parseFloat(prompt("Informe um número natural:"));

 if (num1 > num2)
 document.write(`<div class='topo'>O número ${num1} é maior que ${num2}`);
 else {
     document.write(`<div class='topo'>O número ${num2} é maior que ${num1}`);
 }
"<br>"

 if (num1 > num2)
    document.write("<div class='num2'>A raiz quadrada do maior é igual a: " + Math.sqrt(num1) + " <br> A potência quadrada do menor é igual a: " + Math.pow(num2,2));
    else {
    document.write("<div class='num2'>A raiz quadrada do maior é igual a: " + Math.sqrt(num2) +",<br>A potência quadrada do menor é igual a: " + Math.pow(num1,2));
    }    



