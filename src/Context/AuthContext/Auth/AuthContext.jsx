import { createContext, useContext } from "react";
import axios from "axios"
import { useState } from "react";


const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

const authInitialState = localStorage.getItem("AuthToken") ? true : false;

function AuthProvider({ children }) {

    const [isAuth, setIsAuth] = useState(authInitialState);

    async function loginHandler(email, password) {
        try {
            const response = await axios.post(`/api/auth/login`, {
                email,
                password
            });
            localStorage.setItem("AuthToken", response.data.encodedToken)
            setIsAuth(true)
        }
        catch (error) {
            console.error(error);
        }
    }
    async function signupHandler(navigate, email, firstName, lastName, password, confirmPassword) {
        try {
            const response = await axios.post(`/api/auth/signup`, {
                email,
                password,
                firstName,
                lastName,
                confirmPassword

            });
            localStorage.setItem("AuthToken", response.data.encodedToken)
            setIsAuth(true)
            navigate("/")
            alert("signup successful")
        }
        catch (error) {
            console.error(error)
        }
    }
    return (<AuthContext.Provider value={{ setIsAuth, loginHandler, signupHandler }}>
        {children}
    </AuthContext.Provider>)
}
export { AuthProvider, useAuth }
