import { Button, Form } from "react-bootstrap"
import styles from "./Login.module.css"
import { FormEvent, FormEventHandler, useState } from "react"
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const[showPass, setShowPass] = useState(false);

    // Los parametros siempre deben coincidir en nombre con los valores en los 'name'
    const {values, handleChange} = useForm({
        user: "",
        password: ""
    });
    const {user, password} = values;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // console.log(user, password);
        const response = await fetch("/user.json");
        const usersData = await response.json();
        const userFound = usersData.users.find((u: {username:string; password:string})=> u.username === user && u.password === password); 
        if (userFound) {
            dispatch(setLogin(user));
            navigate("/");
        }else{
            alert('Usuario y/o Contraseña no encontrados')
        }
    }

    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>

                <span style={{fontSize:"10vh", margin: "1rem "}} className="material-symbols-outlined">group</span>

                <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control onChange={handleChange} name="user" value={user} type="text" placeholder="Usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control onChange={handleChange} name="password" value={password} type={showPass ? "text" : "password"} placeholder="Contraseña" />
                    </Form.Group>

                    <Form.Check // prettier-ignore
                        onChange={()=>{setShowPass(!showPass)}}
                        type="switch"
                        id="custom-switch"
                        label="Mostrar Contraseña"
                    />

                    <div className="d-flex justify-content-center align-items-center mt_2">
                        <Button type="submit" variant="primary">Ingresar</Button>{' '}
                    </div>
                </Form>
            </div>
        </div>
    )
}
