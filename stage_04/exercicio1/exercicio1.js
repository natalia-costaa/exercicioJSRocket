let firstNumber = prompt("Digite o primeiro valor");
let secondNumber = prompt("Digite o segundo valor");

const soma = Number(firstNumber) + Number(secondNumber);
const subtracao = Number(firstNumber) - Number(secondNumber);
const multipli = Number(firstNumber) * Number(secondNumber);
const divisao = Number(firstNumber) / Number(secondNumber);
const restoDivisao = Number(firstNumber) % Number(secondNumber);

alert(`A soma de dois números é: ${soma}`);
alert(`A subtração de dois números é: ${subtracao}`);
alert(`A multiplicação de dois números é: ${multipli}`);
alert(`A divisão de dois números é: ${divisao}`);
alert(`O resto da divisão de dois números é: ${restoDivisao}`);

if ((soma % 2) === 0) {
    alert('A soma de dois números é par: ' + soma)
} else {
    alert('A soma de dois números é impar: ' + soma)
}

if (firstNumber === secondNumber) {
    alert('Os números inseridos são iguais')
} else {
    alert('Os números inseridos são diferentes')
}