document.addEventListener('DOMContentLoaded', () => {
    intro_js();
    op_logicos_condicionales();
    op_asignacion_bucles();
    funciones_js();
    objetos();
    arrays();
    dom();
    dom_event();
    local_storage();
});


function ej_2(){
    const a = 5;
    const b = 10;
    const c = a + b;
    console.log('La suma de a y b es: ', c);
}

function ej_3(){
    // Pedir al usuario que ingrese su nombre mediante un prompt
    const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    console.log(`Hola, ${nombreUsuario}!`);
}

function intro_js(){
    ej_2();
    ej_3();
}


function op_ej1(){
    const a = 6;
    const b = 14;
    let c;

    if (a > b) {
        c = a; 
        console.log(`El mayor de los 3 numeros es ${c}`);
    } else if (b > a) {
        c = b; 
        console.log(`El mayor de los 3 numeros es ${c}`);
    } else {
        c = "Ambos numeros son iguales"; 
        console.log(c);
    }   
}

function op_ej2(){
    const par_impar = Number(prompt("Ingresa un numero y te dire si es par o impar:"));
    if (!Number.isNaN(par_impar)) {
        if (par_impar % 2 === 0) {
            console.log(`El número ${par_impar} es par.`);
        } else {
            console.log(`El número ${par_impar} es impar.`);
        }
    }else{
        console.log('Debe ingresar un numero, reinicie la pagina.');
    }
}

function op_logicos_condicionales(){
    op_ej1();
    op_ej2();
}


function op_asBu_ej1(){
    let num = 10;
    while (num ==! 0) {
        console.log(num);
        num -= 1;
    }
}

function op_asBu_ej2() {
    let num;
    do {
        num = Number(prompt('Ingresa un número mayor a 100'));
    } while (isNaN(num) || num <= 100);
    console.log(`Ingresaste un número mayor a 100: ${num}`);
}


function op_asignacion_bucles(){
    op_asBu_ej1();
    op_asBu_ej2();
}


function esPar(num){
    if (Number.isInteger(num)) {
        if (num % 2 === 0) {
            console.log(`El numero ${num} es par: ${true}`);
        }else{
            console.log(`El numero ${num} es impar: ${false}`);
        }
    }else{
        return NaN;
    }
}

function convertirCelsiusAFahrenheit(){
    let celcius;
    let farenheit;
    do{
        celcius = Number(prompt('Ingresa un valor en ºC: '));     
    }while(isNaN(celcius))
    farenheit = celcius * 1.8 + 32;
    console.log(`${celcius}ºC son equivalentes a ${farenheit}ºF`);
}

function funciones_js(){
    // Ejercicio 1
    esPar(8);
    esPar(7);
    // Ejercicio 2
    convertirCelsiusAFahrenheit();
}

function ej1_obj(){
    const persona = {
        nombre: "Jose",
        edad: "23",
        ciudad: "Mendoza",

        setCiudad: function(ciudad){
            if (String(ciudad)) {
                this.ciudad = ciudad;
            }
        },
        mostrarInformacion: function(){
            console.log(`Persona: ${this.nombre} \nEdad: ${this.edad} \nCiudad: ${this.ciudad}`);
        }
    }

    persona.mostrarInformacion();
    persona.setCiudad('San Martín, Mendoza');
    persona.mostrarInformacion();
}

function ej2_obj(){
    const libro = {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        anio: 1605,

        antiguedad: function(anio){
            if (Number(anio)) {
                if(anio > 10){
                    console.log(`El libro "${this.titulo}" es antiguo: ${true}`);
                }else{
                    console.log(`El libro "${this.titulo}" es antiguo: ${false}`);
                }
            }
        },
    }

    libro.antiguedad();
}

function objetos(){
    ej1_obj();
    ej2_obj();
};

function ej1_arr() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const nuevo_numeros = numeros.map(i => i * 2); // Utilizamos map() para crear un nuevo array

    console.log(`Números originales: ${numeros}`);
    console.log(`Números multiplicados por 2: ${nuevo_numeros}`);
}

function ej2_arr() {
    const pares = []; 
    for (let i = 1; i <= 20; i++) { 
        if (i % 2 === 0) { 
            pares.push(i); 
        }
        if (pares.length === 10) {
            break;
        }
    }
    console.log(`Primeros 10 números pares: ${pares}`);
}

function arrays() {
    ej1_arr();
    ej2_arr();
}

function ej1_dom() {
    const boton = document.querySelector('.cambiar_azul');
    boton.addEventListener('click', () =>{
        const div = document.querySelectorAll('.parrafos p');
        div.forEach((element) => {
            if (element.style.color === 'blue') {
                element.style.color = '';
            } else {
                element.style.color = 'blue';
            }
        })
    })
}

function ej2_dom() {
    const boton = document.querySelector('.alerta');
    boton.addEventListener('click',() =>{
        const input = document.querySelector('.dom_2 form input[type="text"]');
        if (input) {
            alert(`Has ingresado: ${input.value}`);
        } else {
            console.error('No se encontró un input de tipo text');
        }
    });
}

function dom(){
    ej1_dom();
    ej2_dom();
}

function ej1_dom_event(){
    document.querySelector('.dom_event_1 ul').addEventListener('click', (event)=>{
        // Verifica si el elemento clickeado es un <li>
        if (event.target.tagName === 'LI') {
            console.log(event.target.textContent);
        }
    });
}

function ej2_dom_event(){
    const input = document.querySelector('.dom_event_2 form input[type="text"]');
    const deshabilitar = document.querySelector('.dom_event_2 form button[class="deshabilitar"]');
    const habilitar = document.querySelector('.dom_event_2 form button[class="habilitar"]');
    deshabilitar.addEventListener('click', ()=>{
        input.disabled = true;
    });
    habilitar.addEventListener('click', ()=>{
        input.disabled = false;
    });
}

function dom_event(){
    ej1_dom_event();
    ej2_dom_event();
}

function ej1_localStorage(){
    const form = document.querySelector('.correo form');
    const input = document.querySelector('.correo form input[type="email"]');
    const mostrarCorreoDiv = document.querySelector('.mostrarCorreo');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario
        localStorage.setItem('correo', input.value); // Guarda el correo en localStorage
        mostrarCorreo();
    });
    
    function mostrarCorreo() {
        const correoGuardado = localStorage.getItem('correo');
        if (correoGuardado) {
            mostrarCorreoDiv.innerHTML = `
                <p>Correo guardado: ${correoGuardado}</p>
                <button class="eliminarCorreo">Eliminar Correo Guardado</button>`;
            document.querySelector('.eliminarCorreo').addEventListener('click', eliminarCorreo);
        } else {
            mostrarCorreoDiv.innerHTML = ''; // Limpiar el contenido si no hay correo
        }
    }

    function eliminarCorreo() {
        localStorage.removeItem('correo');
        mostrarCorreo(); // Actualiza el DOM
    }

    mostrarCorreo(); // Mostrar correo al cargar la página si existe
}

function local_storage(){
    ej1_localStorage();
} 