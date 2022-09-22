let salarioBruto = 3000;
let imposto;
let salarioSemInss;
let salarioSemImpostoDeRenda;

if (salarioBruto <= 1556.94) {
    console.log(salarioSemInss = salarioBruto - (salarioBruto * 0.08));
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    console.log(salarioSemInss = salarioBruto - (salarioBruto * 0.09));
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    console.log(salarioSemInss = salarioBruto - (salarioBruto * 0.11));
}
else  if (salarioBruto >= 5189.83) {
    console.log(salarioSemInss = salarioBruto - 570.88);
}

if (salarioSemInss <= 1903.98) {
    console.log(salarioSemInss);
}
else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65) {
    console.log(salarioSemImpostoDeRenda = salarioSemInss * 0.075 - 142.80);
}
else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05) {
    console.log(salarioSemImpostoDeRenda = salarioSemInss * 0.15 - 354.80);
}
else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68) {
    console.log(salarioSemImpostoDeRenda = salarioSemInss * 0.225 - 636.13);
}
else if (salarioSemInss >= 4664,68) {
    console.log(salarioSemImpostoDeRenda = salarioSemInss * 0.275 - 869.36);
}

console.log (salarioSemInss - salarioSemImpostoDeRenda)