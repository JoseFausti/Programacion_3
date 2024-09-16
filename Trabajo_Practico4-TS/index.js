"use strict";
// npm init -y && npm i -D typescript && npx tsc --init
// npx tsc -w
/*
    '?': (Optional Chaining Operator): Proporciona una forma segura de acceder a propiedades o métodos de un objeto que podría ser null o undefined. Evita errores si el objeto no está presente.
    '!': (Non-null Assertion Operator): Forza a TypeScript a tratar un valor como no null o undefined, eliminando las advertencias del compilador sobre la nulidad. Sin embargo, si el valor realmente es null en tiempo de ejecución, puede causar errores.
*/
console.log("Ejercicio 2: corriendo desde typescript");
// Ejercicio 3: Crea variables de diferentes tipos de datos (string, number, boolean, Date).
// Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
let texto = "Hola, TypeScript!";
let numero = 123;
let booleano = true;
let date = new Date();
document.getElementById("ej3_1").innerHTML = `Texto: ${texto}`;
document.getElementById("ej3_2").innerHTML = `Número: ${numero}`;
document.getElementById("ej3_3").innerHTML = `Booleano: ${booleano}`;
document.getElementById("ej3_4").innerHTML = `Fecha: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
// Ejercicio 4: Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML.
// La función debe recibir un número y devolver su representación en cadena.
const numberToText = (num) => { return num.toString(); };
numero = 456;
document.querySelector(".ej4 p").innerHTML = `Número convertido a cadena: ${numberToText(numero)}`;
// Ejercicio 5: Crea un array de números y una función que sume todos los elementos del array.
// Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.
const sumarElementos = (array) => {
    let num = 0;
    array.forEach((el) => { num += el; });
    return num;
};
let array = [1, 2, 3, 4, 5];
document.querySelector(".ej5 p").innerHTML = `Suma del array: ${sumarElementos(array)}`;
// Ejercicio 6: Crea un objeto que representa a un estudiante con nombre, edad y curso.
// Muestra al estudiante y sus propiedades en el HTML. El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemáticas"
};
document.querySelector(".ej6").innerHTML = `
    <p>Estudiante: ${estudiante.nombre}<p/>
    <p>Edad: ${estudiante.edad}<p/>
    <p>Curso: ${estudiante.curso}<p/>
`;
const direccion = {
    calle: "Av.Principal",
    ciudad: "Ciudad",
    codigoPostal: "12345",
};
document.querySelector(".ej7").innerHTML = `Direccion: Calle:${direccion.calle}, Ciudad:${direccion.ciudad}, CP:${direccion.codigoPostal}`;
;
const usuario = {
    nombre: "Ana",
    correo: "ana@correo.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
document.querySelector(".ej8").innerHTML = `<p>${usuario.saludar()}</p>`;
// Ejercicio 9: Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML.
// La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona {
    // Constructor
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    // Getters y Setters
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    // Metodos
    presentarse() {
        return `Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años.`;
    }
}
const persona = new Persona("Carlos", 30);
document.querySelector(".ej9").innerHTML = `<p>${persona.presentarse()}</p>`;
// Ejercicio 10: Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML.
// La clase debe permitir almacenar y obtener un valor de cualquier tipo.
class Caja {
    // Constructor
    constructor(valor) {
        this._valor = valor;
    }
    // Metodos
    obtenerValor() {
        return this._valor;
    }
}
const caja = new Caja("Mensaje secreto");
const caja2 = new Caja(42);
document.querySelector(".ej10").innerHTML = `
    <p>Contenido de cajaDeTexto: ${caja.obtenerValor()}</p>
    <p>Contenido de cajaDeNumero: ${caja2.obtenerValor()}</p>
`;
// Ejercicio 11: Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML.
// La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.
function identidad(valor) {
    return valor;
}
const numero_identidad = identidad(123);
const texto_identidad = identidad("texto");
document.querySelector(".ej11").innerHTML = `
    <p>Identidad del número: ${numero_identidad}</p>
    <p>Identidad del texto: ${texto_identidad}</p>
`;
// Ejercicio 12: Define una enumeración `Color` con valores para diferentes colores. 
// Usa esta enumeración para asignar un color favorito a una variable y muéstralo en el HTML. La enumeración debe incluir al menos tres colores diferentes.
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Rojo";
    Colores["Azul"] = "Azul";
    Colores["Verde"] = "Verde";
})(Colores || (Colores = {}));
const colorFavorito = Colores.Azul;
document.querySelector(".ej12").innerHTML = `<p>Color favorito: ${colorFavorito}</p>`;
