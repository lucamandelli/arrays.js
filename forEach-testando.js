const arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayTeste);

const arrayNovo = [];

arrayTeste.forEach((num) => {
  arrayNovo.push(num * num);
});

console.log(arrayNovo);
