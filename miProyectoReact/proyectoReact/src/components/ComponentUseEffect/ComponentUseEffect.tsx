import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {

    const [state, setState] = useState(false)
    
    // Cuando se monta un componente
    useEffect(()=>{
        console.log('Componente Montado');
        // Cuando se desmonta el componente
        return ()=>{
            console.log('Componente Desmontado');
        }
    }, []); // Array vacio indica que el componente se va a ejecutar una vez que el componente ha sido montado

    // Cuando escuchamos el cambio de una variable
    useEffect(()=>{
        console.log(state);
    }, [state]);

    return (
        <div>
            <p>{state ? "Es True" : "Es False"}</p>
            <button onClick={()=>{
                setState(!state)
            }}>
                Cambiar State
            </button>
        </div>
    )
}