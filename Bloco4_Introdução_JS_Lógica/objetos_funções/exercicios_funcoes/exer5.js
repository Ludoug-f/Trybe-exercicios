function NumRep(numeros) {
  let contRep = 0;
  let contNum = 0;
  let indexNumRep = 0;
  for (let index in numeros) {
    let verNum = numeros[index];
    for (let index2 in numeros) {
      if (verNum === numeros[index2]) {
        contNum += 1;
      }
    }
    if (contNum > contRep) {
      contRep = contNum;
      indexNumRep = index;
    }
    contNum = 0;
  }
  return numeros[indexNumRep];
}

console.log(NumRep([2, 3, 2, 5, 8, 2, 3]));