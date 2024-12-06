import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("userEmail");
    return user ? children : <Navigate to="/login" />;
};

