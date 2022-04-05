let maiorNumero = 0;

for (let index1 = 0; index1 <= 50; index1 += 1) {
  let primo = true;
  for (let index2 = 2; index2 < index1; index2 += 1) {
    if (index1 % index2 === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorNumero = index1;
  }
}

console.log(maiorNumero);