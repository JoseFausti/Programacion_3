import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Se importan funciones de Redux Toolkit para crear el slice y tipar las acciones
import { IGift } from "../../types/gift"; // Se importa la interfaz 'IGift', que define la estructura de un objeto regalo

// Define una interfaz para tipar el estado del slice
// El estado será un objeto con una propiedad 'gift', que es un array de objetos de tipo 'IGift'
interface IInitialState {
    gift: IGift[]; // Un array que contendrá objetos del tipo 'IGift'
}

// Se define el estado inicial del slice usando la interfaz anterior
// Aquí, 'gift' se inicializa como un array vacío, que luego puede llenarse con objetos 'IGift'
export const initialState: IInitialState = {
    gift: [] // Estado inicial: un array vacío
}

// Se utiliza 'createSlice' para crear el slice
// Este slice contiene el estado y los reducers que se encargan de modificar ese estado
const giftSlice = createSlice({
    name: 'giftState', // El nombre del slice, que identifica este grupo de estado dentro del store de Redux
    
    // Se define el estado inicial del slice
    initialState,

    // Los reducers son funciones que especifican cómo debe cambiar el estado en respuesta a las acciones
    reducers: {
        // Reducer para establecer los regalos en el estado
        // Se recibe un array de objetos 'IGift' como 'action.payload' y se asigna al estado
        setGifts: (state, action: PayloadAction<IGift[]>) => {
            state.gift = action.payload; // Reemplaza el array actual de 'gift' con el array recibido en 'action.payload'
        },

        // Reducer para resetear el estado de 'gift' a un array vacío
        resetGifts: (state) => {
            state.gift = []; // Vacía el array de 'gift', reseteando el estado
        }
    },
})

// Se exportan las acciones generadas automáticamente por 'createSlice'
// Estas funciones (setGifts y resetGifts) se pueden despachar (dispatch) para modificar el estado en la aplicación
export const { setGifts, resetGifts } = giftSlice.actions;

export default giftSlice.reducer