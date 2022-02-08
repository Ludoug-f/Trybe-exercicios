function menorIndice(numeros) {
    let result = 0;
    for (const i in numeros) {
        if (numeros[result] > numeros[i]) {
            result = i
        }
    }
    return result
}
console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));