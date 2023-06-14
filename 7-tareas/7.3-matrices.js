//1. Sumar las posiciones de dos arreglos, posicion a posicion. 
//[1, 3, 5]
//[6, 7, 9]
//= [7, 10, 14]
//
var array1 = [1,3,5];
var array2 = [6,7,9];
var r = [];

for(i = 0; i < array1.length; i++){
  r[i] =array1[i]+array2[i];
}

console.log(r);

//2. Sumar y restar dos matrices y mostrar el resultado.
//resta

const first = [9, 8, 7, 6, 5];
const second = [10, 20, 30, 40, 50];

const substract = (first, second) =>
    first.reduce((acc, curr, i) => {
        // acc es el array resultado
        // curr es el elemento actual
        // i es el indice del elemento actual

        // Camculamos el elemento de la resta
        const sub = curr - second[i];

        // Añadimos el elemento al array resultado
        acc.push(sub);

        // Devolvemos el array resultado
        // que será el mismo que nos pasarán
        // por algumento en la siguiente
        // iteración
        return acc;
    }, []);

console.log(substract(first, second)); // [ -1, -12, -23, -34, -45 ]
console.log(substract(second, first)); // [ 1, 12, 23, 34, 45 ]

//suma

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//3. Multiplicacion de matrices.
function multiplicarMatriz(m1,m2) {

  fil_m1 = m1.length;
  col_m1 = m1[0].length;

  fil_m2 = m2.length;
  col_m2 = m2[0].length;

  if (col_m1 != fil_m2)
      throw "No se pueden multiplicar las matrices";
          
  let multiplicacion = new Array(fil_m1);
  for (x=0; x<multiplicacion.length;x++)
      multiplicacion[x] = new Array(col_m2).fill(0);

  for (x=0; x < multiplicacion.length; x++) {
      for (y=0; y < multiplicacion[x].length; y++) {            		            		
          for (z=0; z<col_m1; z++) {
              multiplicacion [x][y] = multiplicacion [x][y] + m1[x][z]*m2[z][y]; 
          }
      }
  }

  return multiplicacion;

}   

function imprimitMatriz(matriz) {
  for (x=0;x<matriz.length;x++) {
      text = ""
      for (y=0;y<matriz[x].length;y++) {
          text += matriz[x][y] + "\t";
      }
      console.log(text)
  }
}

m1 = [[1,2,3],[4,5,6]];
m2 = [[7,8],[9,10],[11,12]];
r = multiplicarMatriz(m1,m2);

console.log(imprimitMatriz(r));


4. Crear un carrito de compras.
Crear el formulario, leer 3 datos del formulario e imprimir el array de productos.
