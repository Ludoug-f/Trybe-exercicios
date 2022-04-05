function maiorNome(nomes) {
    let result = ""
    for (const i in nomes) {
        if (nomes[i].length > result.length) {
            result = nomes[i]
        }
    }
    return result
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));