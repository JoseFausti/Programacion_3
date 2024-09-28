import React, { FC, useEffect, useState } from "react"
import "./Ejercicios.css"

// Estado: Almacena datos que cambian con el tiempo y afecta cómo se renderiza el componente.
// Efecto: Permiten ejecutar código secundario (como llamadas a API o temporizadores) en respuesta a cambios en el estado o las props. Se ejecuta cada vez que que un estado cambia

/* EJERCICIO 1 */
export const Ej_1: FC = () => {
  const [n, setN] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [i, setI] = useState<number>(0);
  const [t, setT] = useState<number>(0);
  const [m, setM] = useState<string>("");

  const adivinar = (e: React.FormEvent) => {
    e.preventDefault();
    if (i < n) {
      setM("Demasiado bajo");
      setT(t+1);
    } else if (i > n) {
      setM("Demasiado alto");
      setT(t+1);
    } else {
      setM("¡Adivinaste!");
      setT(t+1);
    }
  };

  const handleResetGame = () => {
    setN(Math.floor(Math.random() * 100) + 1);
    setM("");
    setI(0);
    setT(0);
  };

  return (
    <div className="ej_1">
      <h3>Juego de Adivinanza de Números</h3>
      <form onSubmit={adivinar}>
        <input
          type="number"
          name="i"
          placeholder="Ingresa un número entre 1 y 100"
          value={i}
          onChange={(e) => setI(parseInt(e.target.value))} // Actualiza el estado con el valor del input
        />
        <div className="button-group">
          <button type="submit">Adivinar</button>
          <button type="button" onClick={handleResetGame}>Resetear Juego</button>
        </div>
      </form>
      {m && <p>{m}, Intentos: {t}</p>} {/* Muestra el mensaje si existe */}
    </div>
  );
};

/* EJERCICIO 2 */
export const Ej_2: FC = ()=>{
  
  const [c, setC] = useState<string>('#fff');

  const generarColorAleatorio = () => {
    // Generar un número aleatorio entre 0 y 255 para cada componente de color
    const r = Math.floor(Math.random() * 256); // Rojo
    const g = Math.floor(Math.random() * 256); // Verde
    const b = Math.floor(Math.random() * 256); // Azul
  
    // Convertir cada componente a hexadecimal
    const hexR = r.toString(16).padStart(2, '0'); // toString(): convierte un número a una cadena, en base hexadecimal
    const hexG = g.toString(16).padStart(2, '0'); // padStart(): rellena el inicio de una cadena con un carácter específico hasta alcanzar una longitud deseada. ej: '5'.padStart(2, '0') → '05'
    const hexB = b.toString(16).padStart(2, '0');
  
    // Concatenar los componentes en un formato hexadecimal
    const hexColor = `#${hexR}${hexG}${hexB}`;
  
    // Actualizar el estado con el color generado
    setC(hexColor);
  }
  
  
  return(
    <div>
      <div className="ej_2" style={{backgroundColor: c}}></div>
      <div className="button-group">
      <button onClick={generarColorAleatorio}>Cambiar Color</button>
      </div>
    </div>
    
  )
}


/* EJERCICIO 3 */
export const Ej_3: FC = () => {
  const [t, setT] = useState<number>(0);
  const [m, setM] = useState<string>("");
  const [isPaused, setIsPaused] = useState<boolean>(true);

  // *Se ejecuta automaticamente una vez que se producen cambios en t o isPaused
  useEffect(() => {
    // Si el temporizador está pausado o el tiempo es menor o igual a 0, no hacemos nada
    if (isPaused || t <= 0) {
      if (t === 0) {
        setM("Cuenta regresiva finalizada");
      }
      return; // Salimos del efecto si está pausado o el tiempo es 0 o menos
    }

    // Configuramos un temporizador que se ejecuta cada segundo
    const timer = setTimeout(() => {
      setT((prevT) => {
        if (prevT > 1) {
          return prevT - 1;
        } else {
          setM("Cuenta regresiva finalizada");
          return 0; // Finaliza la cuenta regresiva
        }
      });
    }, 1000);

    return () => clearTimeout(timer); // Limpiamos el timeout al desmontar o al cambiar el estado
  }, [isPaused, t]); // Dependencias: se ejecuta cuando isPaused o t cambian

  const iniciar = () => {
    setIsPaused(false);
    setM("");
  };

  const pausar = () => {
    setIsPaused(true);
    setM(`Cuenta regresiva pausada en: ${t}`);
  };

  const reiniciar = () => {
    setIsPaused(true);
    setT(0);
    setM("");
  };

  // Función para manejar el cambio en el input
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setT(Number(e.target.value)); // Actualiza el valor de t según el input
    setM("");
  };

  return (
    <div className="ej_3">
      <h4>Ingrese un número para la cuenta regresiva</h4>
      <input type="number" name="t" value={t} onChange={manejarCambio} />
      
      <div className="button-group">
        <button onClick={iniciar} disabled={!isPaused || t <= 0}>Iniciar cuenta regresiva</button>
        <button onClick={pausar} disabled={isPaused || t <= 0}>Pausar cuenta regresiva</button>
        <button onClick={reiniciar}>Reiniciar cuenta regresiva</button>
      </div>
  
      <p>{m}</p>
    </div>
  );
};
