let quantidade = 1000;
let custo = 10.00;
let venda = 25.00;
let imposto = 0.20;
let custoTotal = custo * imposto + custo;
let lucro = venda - custoTotal;

if (custo >= 0 && venda >= 0 && quantidade >= 0) {
    console.log(lucro * quantidade);
}
else {
    console.log('Erro!')
}