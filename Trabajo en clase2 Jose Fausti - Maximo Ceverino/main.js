document.addEventListener('DOMContentLoaded', () =>{
    ejercicio1();
    ejercicio2();
    ejercicio3();
    ejercicio4();
    ejercicio5();
});

async function ejercicio1(){
    //  1. **Obtener datos de un usuario aleatorio**
    //  - **API Endpoint**: https://randomuser.me/api/
    //  - **Documentación**: https://randomuser.me/
    //  - **Descripción**: La API de Random User Generator permite obtener datos ficticios de un usuario, 
    //  incluyendo nombre, ubicación, imagen, y más. En este ejercicio, se utiliza el endpoint principal 
    //  para obtener un usuario aleatorio y se muestra su información en el contenedor HTML con el id="userInfo".

    /* EJERCICIO 1 */
    try{
        const url = 'https://randomuser.me/api/';
        // Usa fetch para hacer la solicitud - vinculacion
        const response = await fetch(url);
        // Lo traemos los resultados en formato json
        const data = await response.json();
        // Imprimimos resultados
        console.log(data);

        const person = data.results[0];

        const nombre = `${person.name.first} ${person.name.last}`;
        const ubicacion = `${person.location.country} ${person.location.state}`;
        const urlImage = `${person.picture.medium}`;

        console.log(nombre);
        console.log(ubicacion);
        console.log(urlImage);

        const divInfo = document.getElementById("userInfo");

        // Agrega elementos al elemento seleccionado del HTML
        divInfo.innerHTML = `
        <p> Nombre: ${nombre} </p>
        <p> Ubicacion: ${ubicacion} </p>
        <img src="${urlImage}" width ="150">`;
        

    }catch(error){
        console.log(error);
    }
}

async function ejercicio2(){
    // 2. **Mostrar una lista de posts**
    // - **API Endpoint**: https://jsonplaceholder.typicode.com/posts
    // - **Documentación**: https://jsonplaceholder.typicode.com/
    // - **Descripción**: JSONPlaceholder es una API de prueba que proporciona datos simulados como posts,
    // comentarios, tareas, etc. En este ejercicio, se utiliza el endpoint "/posts" para obtener una lista de publicaciones,
    // mostrando los títulos de los primeros 10 posts en una lista desordenada dentro del contenedor HTML con el id="postsList".

    try {
        const url = 'https:jsonplaceholder.typicode.com/posts';
        // Usa fetch para hacer la solicitud - vinculacion
        const response = await fetch(url);
        // Lo traemos los resultados en formato json
        const data = await response.json();
        // Imprimimos resultados
        console.log(data);

        const arrayUsers = data.slice(0, 10);
        const usersTitle = [];
        arrayUsers.forEach(e => {
            usersTitle.push(e.title)
        });
        console.log(usersTitle);
        
        const divPost = document.getElementById('userTitle');
        var counter = 0;
        for (counter; counter < arrayUsers.length; counter++) {
            const listItem = document.createElement('li');
            listItem.textContent = usersTitle[counter];
            // Agregamos el elemento 'li' al div
            divPost.appendChild(listItem);
        }

    } catch (error) {
        console.log(error);
        
    } 
}

async function ejercicio3(){
    // 3. **Mostrar la temperatura actual**
    // - **API Endpoint**: https://api.openweathermap.org/data/2.5/weather
    // - **Documentación**: https://openweathermap.org/current
    // - **Descripción**: OpenWeatherMap ofrece datos meteorológicos actuales, previsiones,
    // e históricos mediante su API. En este ejercicio, se consulta el endpoint "/weather"
    // para obtener la temperatura y la descripción del clima actual de la ciudad de Mendoza, 
    // Argentina. Los resultados se muestran en el contenedor HTML con el id="weatherInfo"
    // -**recursos** 
    //         --apikey : c61e0400e304a834d4159274cfc06146
            
    // -**ayudas**
    //     -parametros a utilizar =  units, lang, 
    //     -ver como pasar el parametro de pais y region link:https://openweathermap.org/current#name


    try{
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=mendoza&lang=es&appid=c61e0400e304a834d4159274cfc06146';
        // Usa fetch para hacer la solicitud - vinculacion
        const response = await fetch(url);
        // Lo traemos los resultados en formato json
        const data = await response.json();
        // Imprimimos resultados
        console.log(data);

        const temperature = data.main.temp; 
        const weatherDescription = data.weather[0].description;

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
        <p> Temperatura de Mendoza: ${temperature}ºC </p>
        <p> Descripcion: ${weatherDescription} </p> `;

    }catch(error){
        console.log(error);
    }

}

async function ejercicio4() {
    // 4. **Mostrar una imagen de un perro aleatorio**
    // - **API Endpoint**: https://dog.ceo/api/breeds/image/random
    // - **Documentación**: https://dog.ceo/dog-api/
    // - **Descripción**: La Dog API proporciona imágenes aleatorias de diferentes razas de perros. 
    // En este ejercicio, se utiliza el endpoint "/breeds/image/random" para obtener una imagen aleatoria 
    // de un perro y se muestra en el contenedor HTML con el id="dogImage".

    try {
        const url = 'https://dog.ceo/api/breeds/image/random';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    
        const img = data.message;
        const dogImage = document.getElementById('dogImage');
        dogImage.innerHTML = `
        <img src="${img}" alt="Imagen Perro" width="200px" height="200px">`;
    } catch (error) {
        console.log(error);
    }
}

async function ejercicio5() { 
    // 5. **Mostrar una lista de tareas**
    // - **API Endpoint**: https://jsonplaceholder.typicode.com/todos
    // - **Documentación**: https://jsonplaceholder.typicode.com/
    // - **Descripción**: Similar al ejercicio 2, se utiliza JSONPlaceholder para obtener datos simulados. 
    // En este caso, se usa el endpoint "/todos" para obtener una lista de tareas. Se muestran las primeras 
    // 5 tareas en una lista desordenada, indicando si están completadas o no, en el contenedor HTML con el id="todoList".

    try{
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const response = await fetch(url);
        const data = await response.json();

        const arrayTasks = data.slice(0, 5);
        console.log(arrayTasks);

        const todoList = document.getElementById('todoList');

        // Crear un único <ul> para todas las tareas
        const unorderList = document.createElement('ul');

        arrayTasks.forEach(task => {
            // Crear un <li> para cada tarea
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>Titulo: ${task.title}</p>
                <p>${task.completed ? 'Tarea completada' : 'Tarea no completada'}</p>`;
            // Añadir el <li> al <ul>
            unorderList.appendChild(listItem);
        });

        // Añadir el <ul> al contenedor todoList
        todoList.appendChild(unorderList);
        
    } catch (error) {
        console.log(error);
    }
}