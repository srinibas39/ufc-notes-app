import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({ token, children }) => {
    const location = useLocation();
    return token ? children : <Navigate to="/login" state={{ from: location }} replace />
}