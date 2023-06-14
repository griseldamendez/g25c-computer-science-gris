Investigar que es ecma y listar las funcionalidades mas importantes entre es6 y es13

ECMA (European Computer Manufacturers Association) es una organización que se dedica a definir estándares a nivel nacional e internacional. ECMAScript es la especificación que esta organización 
ha publicado con el fin de estandarizar JavaScript.

funcionalidades
Es6   
-->Let
La instrucción let declara una variable local con alcance a nivel de bloque (block scope), la cual, 
opcionalmente, puede ser inicializada con algún valor.                                          

-->Const
Const tiene un funcionamiento parecido a let, con la diferencia que el valor de una constante no puede cambiarse a través de la reasignación, y no se puede volver a declarar.

const numero = 10;
numero = 15; // Arroja un error

-->Plantillas de Texto
Las plantillas de cadena de texto (template strings) son literales de texto que habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de texto de más de una línea, y funcionalidades de interpolación de cadenas de texto con ellas.

const a  = 5;
const b = 10;

// JS Vanilla
console.log("Quince es " + (a + b) + " y no " + (2 * a + b) + ".");

// ES6
console.log(`Quince es ${a + b} y no ${2 * a + b}`);

// Quince es 15 y no 20
-->Clases
Se agrega azúcar sintáctica que provee una manera más intuitiva y sencilla de crear clases. En la primera imagen, puedes observar la creación de una clase usando funciones. En la segunda imagen, se observa la creación de una clase empleando la palabra reservada class.

// JS Vanilla
function Automovil(nombre, kilometros, horas) {
  this.nombre = nombre;
  this.kilometros = kilometros;
  this.horas = horas;
}

Automovil.prototype.setVelocidad = function(km, h){
  this.velocidad = km / h; 
}

// ES6
class Automovil {
  constructor(nombre, kilometros, horas) {
    this.nombre = nombre:
    this.kilometros = kilometros:
    this.horas = horas:
  }
  setVelocidad(km, h) {
    this.velocidad = km / h;
  }
}
-->Arrow Functions
Una función flecha es una alternativa sintácticamente más compacta que una función convencional. Dichas funciones no realizan sus propias vinculaciones de this, arguments, super o new.target, y no son adecuadas para ser utilizadas como métodos, además de que no pueden ser usadas como constructores.

const funcionFlecha = x => x * y;
// sintaxis de cuerpo conciso, el "return" está implícito

const funcionFlecha = (x, y) => { return x + y; };
// con cuerpo de bloque, se necesita "return" explícito
Desestructuración
La sintaxis de asignación por desestructuración (destructuring assignment) es una expresión que posibilita la extracción de datos, tanto de arreglos como de propiedades de objetos, en variables distintas.

const objeto = {
  a: 'casa',
  b: 'departamento',
};

const { a, b } = objeto;

console.log(a); // 'casa'
console.log(b); // 'departamento'


/*
  Si quisiéramos asignar las propiedades del objeto con
  nombres de variables distintos, podemos hacerlo así
*/

const { a: uno, b: dos } = objeto;

console.log(uno);  // 'casa'
console.log(dos);  // 'departamento'

const arreglo = [
  "uno",
  "dos",
];

const [ a, b ] = arreglo;

console.log(a);  // 'uno'
console.log(b);  // 'dos'

-->Operador Spread
El operador de propagación (spread operator) permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).

const frutas = ['manzana', 'banana'];
const lista = ['cereal', ...frutas, 'arroz'];

console.log(lista);
// ['cereal', 'manzana', 'banana', 'arroz'];


-->Promesas
Es la representación de primera clase de un valor que puede hacerse asíncrono y estar disponible en el futuro.



const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(
    () => number > 5
      ? resolve(number)
      : reject(new Error('Menor a 5')),
    1000
  );
});

promesa
  .then(number => console.log(number))
  .catch(error => console.log(error));

  funcionalidades de es13
  