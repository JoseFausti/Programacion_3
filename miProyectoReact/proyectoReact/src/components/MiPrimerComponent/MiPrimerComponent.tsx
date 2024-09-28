/* 
Componente: Bloque de codigo reutilizable 
Props: Parámetros que recibe nuestra función usados dentro del componente. *'TS': Primero se debe declarar la Interfaz
*/

import { FC } from "react"

interface IPropsMiPrimerComponent{
    text: string;
    color: string;
    fontSize?: number; // '?': Indica que es opcional
}

export const MiPrimerComponent : FC<IPropsMiPrimerComponent> = ({text, color, fontSize}) => {
  return (
    // fontSize: `${fontSize || 1}: Valor por defecto
    <div style={{color: `${color}`, fontSize: `${fontSize || 1}rem`}}> 
        <p>{text}</p>
    </div>
  )
}
