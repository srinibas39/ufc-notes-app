import axios from "axios"


export const LoginServices = (email, password) => {
    return axios.post("/api/auth/login", { email, password })
}