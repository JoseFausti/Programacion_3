import { useState } from "react"

export const ComponentCounter = () => {
  
    // Hook useState: [var, callback (funcion)] 
    const [counter, setCounter] = useState<number>(0) // 0: Valor inicial
  
    const incrementCounter = ()=>{
        setCounter((prev)=> prev+1)
    }
    const decrementCounter = ()=>{
        if (counter > 0) {
            setCounter((prev)=> prev-1)
        }
    }

    return (
        <div>
            <h2>Valor de counter: {counter}</h2>
            <button onClick={incrementCounter}>Incrementar</button>
            <button onClick={decrementCounter}>Decrementar</button>
        </div>
    )
}
