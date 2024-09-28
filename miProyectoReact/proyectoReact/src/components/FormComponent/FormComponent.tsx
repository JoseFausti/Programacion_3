import { useForm } from "../../hooks/useForm"

export const FormComponent = () => {
  
    // Mala Práctica
    // const [email, setEmail] = useState('');
    // const [nombre, setNombre] = useState('');
    // const [edad, setEdad] = useState(0);

    // const [values, setValues] = useState({
    //     // Los nombres deben coincidir con los name de los inputs
    //     email: '',
    //     nombre: '',
    //     edad: 0
    // });

    // // Desestructuracion
    // const {email, nombre, edad} = values;

    // const handleSubmitForm = ()=>{
    //     // console.log({
    //     //     email, 
    //     //     nombre, 
    //     //     edad
    //     // });
    //     console.log({email, nombre, edad});
    // }

    const {values, handleChange, resetForm} = useForm({
        email:'',
        nombre:'',
        edad: 0
    });
    const {email, nombre, edad} = values;
    const handleSubmitForm = ()=>{
        console.log(values);
    }
    const handleResetForm = ()=>{
        resetForm();
    }
  
    return (
        <div>
            <div>
                <h2>Formulario</h2>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
                <input name="email" value={email} onChange={handleChange} type="email" placeholder="example@gmail.com"/> {/* setEmail(e.target.value);*/}
                <input name="nombre" value={nombre} onChange={handleChange} type="text" placeholder="Nombre"/>
                <input name="edad" value={edad} onChange={handleChange} type="number" placeholder="Edad"/>
            </div>
            <div>
                <button onClick={handleSubmitForm}>Enviar</button>
                <button onClick={handleResetForm}>Resetear</button>
            </div>
        </div>
    )
}
