import Swal from "sweetalert2";
import { closeModal, productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

/* ===PRODUCT=== */

// Guardamos
const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElements();
});
// Funcion de Guardar
const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById('nombre').value;
    const imagen = document.getElementById('img').value;
    const precio = document.getElementById('precio').value;
    const categories = document.getElementById('categoria').value;
    // {}: Creacion de un Objeto con propiedades abreviadas. clave: valor son el mismo. ej: {nombre} = {nombre: nombre}. ES6.
    // console.log({nombre, imagen, precio, categories});
    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    }else{
        object = {
            id: new Date().toISOString(), // Imprime la fecha actual
            nombre,
            imagen,
            precio,
            categories
        };
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });
     
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}

// Eliminar elemento
export const handleDeleteProduct = ()=>{

    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo elimina sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=> el.id !== productoActivo.id);
            // Setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
    });
}