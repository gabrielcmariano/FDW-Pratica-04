var i, n = prompt("Informe um valor, em naturais, limítrofe: ");


document.write(`Números múltiplos de 3 no intervalo de [0, ${n}]: `);
    for (i = 3; i <= n; i += 3)
        document.write (i + ", ");

document.write(`<br><br>Números múltiplos de 5 no intervalo de [0, ${n}]:`);

    for (i = 5; i += 5; i <= n)
        document.write (i + ", ");

   
    


    

