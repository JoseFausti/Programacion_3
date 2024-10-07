import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/Login/Login"
import { useAppSelector } from "../hooks/redux"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AppRouter = () => {

  const isLogged = useAppSelector(state=> state.auth.isLogged);

  return (
    <>
      <Routes>
        {
          isLogged ? <Route path="/*" element={<ProtectedRoutes />}/> : <Route path="/*" element={<Navigate to={"/login"} />}/> // Logged: Todas las rutas de ProtectedRoutes, !Logged: Lo redirigimos (Navigate) al login
        }
      </Routes>   
      <Route path="/" element={<Login/>} />
    </>
  )
}
