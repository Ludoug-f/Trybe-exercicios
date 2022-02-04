// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.



let idCarol = 21
let idMurilo = 23
let idBaeta = 22

if (idCarol < idMurilo && idCarol < idBaeta) {
    console.log("Carolzita é a mais nova");
} else if (idMurilo < idCarol && idMurilo < idBaeta) {
    console.log("Murilo é o mais novo");
} else {
    console.log("Baêta é o mais novo");
}