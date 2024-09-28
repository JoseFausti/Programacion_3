// En los componentes siempre debemos retornar algo que este dentro de un contenedor padre, ej: 'div', 'fragment'(React)
// Un componente siempre debe retornar un elemento dentro de un div, o un solo elemento

// '!': non-null assertion operator. Indica que el valor nunca sera null
// '?': optional operator. Indica que un valor es opcional o no genera error si es undefined

// import { useState } from "react"
import { AppProduct } from "./components/AppProduct/AppProduct"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"

export const App = () => {
    // Montado y desmontado de un componente
    // const [enableCounter, setEnableCounter] = useState(false);

    return (
        // Etiqueta fragment
        <div style={{display:"flex", flexDirection:"column", gap:'2vh'}}>
            {/* 
            <MiPrimerComponent text={'Texto desde propiedades'} color='red' fontSize={5}/>
            <ComponentCounter/>
            <ComponentUseEffect/>
            <FormComponent/> 
            */}
            <AppProduct />


            {/* Renderizado Condicional: Si la 1º opcion es false la 2º no se evalua ni renderiza
            {enableCounter && <ComponentCounter />} 
            <button onClick={()=>{
                setEnableCounter(!enableCounter) // Setea el contrario de enableCounter
            }}>Mostrar u Ocultar Counter</button> */}
        </div>
    )
}
