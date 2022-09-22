let peca = 'peão'
let movimento;

switch (peca) {
    case 'peão':
        movimento = 'Um para frente';
        break;
    case 'torre':
        movimento = 'Para frente e para os lados';
        break;
    case 'cavalo':
        movimento = 'Em L';
        break;
    case 'bispo':
        movimento = 'Em diagonal';
        break;
    case 'rainha':
        movimento = 'Todas as direções';
        break;
    case 'rei':
        movimento = 'Um em todas as direções';
        break;
    default:
        movimento = 'Erro, peça inválida'
        break;
}

console.log(movimento.toLowerCase(movimento));