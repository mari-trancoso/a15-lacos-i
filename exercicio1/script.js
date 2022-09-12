let desejaComerMaisCoxinhas = prompt("Deseja comer mais coxinhas? Responda com S para sim ou N para não.")
let conta = 0

while(desejaComerMaisCoxinhas !== "N"){
    desejaComerMaisCoxinhas = prompt("Deseja comer mais coxinhas? Responda com S para sim ou N para não.")
    conta = conta + 2.5
    console.log("A sua conta é: ", conta)
}

console.log("O valor total da conta é de: ", conta)