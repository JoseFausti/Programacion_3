import { FormEvent, useState } from "react";
import { Button, Col, Form , Navbar, Row } from "react-bootstrap";
import { setGifts } from "../../../redux/slices/gift";
import { useAppDispatch } from "../../../hooks/redux";

/* '.env': Archivo de entorno donde setearemos palabras claves que ocuparemos dentro de nuestra app pero que no estaran dentro del codigo */
const API_KEY = import.meta.env.VITE_API_KEY;

// interface IPropsNavBar{
//     setGift: Function;
// }
export const NavBar = () => { {/* : FC<IPropsNavBar> param:{setGift} */}

    // Se usa el hook `useAppDispatch`, que es una versión tipada de `useDispatch` de React-Redux.
    // Este hook te permite despachar acciones para modificar el estado global de Redux. 
    // Al llamarlo, obtienes la función `dispatch` que puedes usar para enviar acciones.
    const dispatch = useAppDispatch() // Funcion de Redux para disparar las acciones
    const fetchGift = async (query:string)=>{
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`);
            const data = await response.json();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parseData = data.data.map((el: any) =>({
                urlGift: el.images.fixed_height.url,
                title: el.title
            }));
            // Aquí se está usando la función `dispatch` para despachar la acción `setGifts`.
            // `setGifts` es un action creator que probablemente fue generado por `createSlice` en Redux Toolkit.
            // Esta acción recibe `parseData` como payload, que contiene los datos procesados que se desean almacenar en el estado global.
            // Cuando esta acción es despachada, se actualiza el estado `gift` en el slice correspondiente (en este caso, el `giftSlice`).
            dispatch(setGifts(parseData));
        } catch (error) {
            console.warn(error);
        }
    }

    const [queryInput, setQueryInput] = useState(''); 
    const submit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        fetchGift(queryInput);
    }; 
    return (
        <Navbar className="bg-body-tertiary justify-content-center">
            <Form onSubmit={submit}>
                <Row>
                    <Col xs="auto">
                    <Form.Control
                        onChange={(e)=>{ // 'e' = 'change' (evento)
                            setQueryInput(e.target.value);
                        }}
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                    />
                    </Col>
                    <Col xs="auto">
                    <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}
