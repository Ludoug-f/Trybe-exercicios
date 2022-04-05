function maiorIndice(numeros) {
    let result = 0;
    for (const i in numeros) {
        if (numeros[result] < numeros[i]) {
            result = i
        }
    }
    return result
}
console.log(maiorIndice([2, 3, 6, 7, 10, 1]));