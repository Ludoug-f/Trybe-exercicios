function palindromo(string) {
    let palavraInversa = string.split('').reverse().join("")
if (string === palavraInversa) {
return true;    
} else {
    return false;
}
}

console.log(palindromo('parametro'));