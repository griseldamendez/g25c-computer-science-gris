const inputNumber = +prompt('Ingresa un número');

let sumatory = 0;
for (let i = inputNumber; i >= 1; i--) {
    console.log(i)
    debugger
    sumatory += i;
}

alert(`El resultado de la sumatoria es: ${sumatory}`);