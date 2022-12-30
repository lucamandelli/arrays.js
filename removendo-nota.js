const notas = [10, 6, 8, 5.5, 10];

const no = [2, 3, 4, 25];

const novo = notas.concat(no);

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}.`);

console.log(novo);
