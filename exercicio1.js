let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            // Troca os valores
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

// Mostra o resultado
console.log("Números ordenados:", numeros);