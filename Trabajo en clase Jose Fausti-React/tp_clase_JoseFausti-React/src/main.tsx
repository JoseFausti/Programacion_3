import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Ej_1, Ej_2, Ej_3} from './Ejercicios'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ej_1/>
    <Ej_2/>
    <Ej_3/>
  </StrictMode>,
)
