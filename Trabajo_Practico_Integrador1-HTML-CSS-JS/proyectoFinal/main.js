import { renderCategories } from "./src/services/categories";
import { setInLocalStorage } from "./src/services/localstorage";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

/* ===APLICACION=== */
handleGetProductsToStore();
renderCategories();

/* ===Product=== */
const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', ()=>{
    openModal();
});
/* ===POPUP=== */
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click',()=>{
    handleCancelButton();
});
const handleCancelButton = ()=>{
    closeModal();
}
// Funciones Abrir-Cerrar Modal
const openModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'flex';
}
const closeModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'none';
}
// Guardar o Modificar Elementos
const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements();
});
const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById('nombre').value;
    const imagen = document.getElementById('img').value;
    const precio = document.getElementById('precio').value;
    const categories = document.getElementById('categoria').value;
    // {}: Creacion de un Objeto con propiedades abreviadas. clave: valor son el mismo. ej: {nombre} = {nombre: nombre}. ES6.
    // console.log({nombre, imagen, precio, categories});
    let object = {
        id: new Date().toISOString(), // Imprime la fecha actual
        nombre,
        imagen,
        precio,
        categories
    };
    console.log(object);
    setInLocalStorage(object);

    closeModal();
}
