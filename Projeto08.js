var i = 0, n = prompt("Informe um número natural limítrofe: ");
var soma = 0;

document.write(`<div class='valor'>Números ímpares naturais no intervalo de [0,${n}[:</div>`);
    do { 
        if(i % 2 == 1)
        document.write(`<span class='resp'>${i}, <span>`);
        if (i % 2 == 1)
        soma += i;
        i++;

    } while (i <= n);

document.write(`<div class='valor'>Resultado da soma dos números ímpares acima : </div>`);
    
            document.write(`<div class='resp'>${soma}</div>`);
       