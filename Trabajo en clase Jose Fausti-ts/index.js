"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ejercicio 1
class Coche {
    // Constructor
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    // Getters y Setters
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getVelocidad() {
        return this.velocidad;
    }
    setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }
    // Metodos
    acelerar(vel) {
        if (!isNaN(vel) && vel > 0) {
            this.velocidad += vel;
            console.log("La velocidad se ha incrementado en: ", vel, "km/h.");
        }
        else {
            console.log("Ingrese un valor válido mayor a 0.");
        }
    }
    frenar(vel) {
        if (!isNaN(vel) && vel > 0) {
            this.velocidad -= vel;
            if (this.velocidad < 0) {
                this.velocidad = 0;
            }
            console.log("La velocidad se ha decrementado en: ", vel, "km/h.");
        }
        else {
            console.log("Ingrese un valor válido mayor a 0.");
        }
    }
    mostrarEstado() {
        console.log(`
            marca: ${this.marca}\n
            modelo: ${this.modelo}\n
            velocidad: ${this.velocidad}
        `);
    }
}
const coche = new Coche("Nissan", "Sentra", 0);
coche.acelerar(20);
coche.frenar(10);
coche.mostrarEstado();
function peticion_ej2() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const peticion = yield fetch("https://jsonplaceholder.typicode.com/todos");
            const data = yield peticion.json();
            data.filter((e) => e.completed);
            console.log("Tareas completadas:");
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
peticion_ej2();
// Ejercicio 3
// Creamos el contenedor principal y lo añadimos al body
const divContenedor = document.createElement('div');
divContenedor.classList.add('contenedor');
document.body.appendChild(divContenedor);
const divPrincipal = document.createElement('div');
divPrincipal.classList.add('contenedor__principal');
divContenedor.appendChild(divPrincipal);
const divSecundario = document.createElement('div');
divSecundario.classList.add('contenedor__secundario');
divPrincipal.appendChild(divSecundario);
let posX = 0;
let posY = 0;
// Simulacion de eventos con flechas
document.addEventListener('keydown', (event) => {
    // clientWidth: devuelve el ancho interior del elemento en píxeles, incluyendo el relleno (padding), pero excluyendo el borde (border) y el margen (margin).
    const step = 20; //Cantidad de px desplazados
    const maxX = divPrincipal.clientWidth - divSecundario.clientWidth; // Límites máximos en el eje X
    const maxY = divPrincipal.clientHeight - divSecundario.clientHeight; // Límites máximos en el eje Y
    switch (event.key) {
        case 'ArrowUp':
            posY = Math.max(0, posY - step);
            break;
        case 'ArrowDown':
            posY = Math.min(maxY, posY + step);
            break;
        case 'ArrowLeft':
            posX = Math.max(0, posX - step);
            break;
        case 'ArrowRight':
            posX = Math.min(maxX, posX + step);
            break;
    }
    // Actualizamos la posición del cubo
    divSecundario.style.transform = `translate(${posX}px, ${posY}px)`;
    divSecundario.style.transition = `transform .2s linear`;
});
