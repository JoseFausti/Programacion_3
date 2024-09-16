import { handleGetProductLocalStorage } from "../services/localstorage"

/* ===STORE=== */

// Funcion que se encarga de traer los elementos y llamar al render
export const handleGetProductsToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

// Se encarga de filtrar y renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn)=>{
    // Filtrado de arrays por categoria
    const burguers = productosIn.filter((el)=> el.categories === "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categories === "Papas");
    const gaseosas = productosIn.filter((el)=> el.categories === "Gaseosas");

    // Renderiza los elementos de la seccion
    const renderProductGroup = (productos, title)=>{
        if (productos.length > 0) {
                const productosHTML = productos.map((producto, index)=>{
                return `
                <div id="product-${producto.categories}-${index}">
                    <div>
                        <img src="${producto.imagen}"/>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div>
                            <p><b>Precio: </b>${producto.precio}</p>
                            <p><b>Categoria: </b>${producto.categories}</p>
                        </div>
                    </div>
                </div>`;
            });
            // Retorna la seccion con todos los elementos dentro
            return `
            <section>
                <h3>${title}</h3>
                <div>
                    ${productosHTML.join("")}
                </div>
            </section>
            `;
        }else{
            return "";
        }
    }
    // Renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burguers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;

    // Añaden los eventos de manera dinamica
    const addEvents = (productsIn)=>{
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categories}-${index}`);
                productContainer.addEventListener("click", ()=>{
                    console.log("productoActivo", element);
                });
            }); 
        }
    };
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};