import { ChangeEvent, useState } from "react"

// Interfaz generica para useForm
interface FormValues{
    [key:string]:string | number
}

export const useForm = <T extends FormValues> (initialValues: T)=>{
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        // Desestructuracion del event
        const {value, name} = event.target;
        setValues({...values, [`${name}`]: parseInt(value)}) // Copiamos las propiedades actuales del estado anterior. Sobrescribimos la propiedad cuyo nombre es `name` con el nuevo valor `value`        
    }
    const resetForm = ()=>{
        setValues(initialValues)
    }

    return{
        values,
        handleChange,
        resetForm,
    };
}