import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./Login.css";

import { loadLogin } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const [form, setForm] = useState({
        email: "", password: ""
    })

    useEffect(() => {
        if (token) {
            if (location?.state?.from?.pathname === undefined) {
                navigate("/notes")
            }
            else {

                navigate(`${location?.state?.from?.pathname}`);
            }
        }
    }, [token])



    const loginToast = () => {
        toast.success('logged in successfully', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }

    const handleSubmit = () => {
        loginToast();
        setTimeout(() => { dispatch(loadLogin({ email: form.email, password: form.password })); }, 1000)
    }



    const handleGuest = () => {
        loginToast();
        setTimeout(() => dispatch(loadLogin({ email: "srinibaskhuntia39@gmail.com", password: "srinibaskhuntia123" })), 1000)

    }

    return <>
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>

                <div className="email-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={form.password} name="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <div className="forgotP-container">
                    <div className="remember">
                        <input type="checkbox" name="remember-me" />
                        <label htmlFor="remember-me">Remember Me</label>
                    </div>
                    <a href="#">Forgot Your Password ?</a>
                </div>
                <button className="btn-logins" onClick={() => handleSubmit()} >Login</button>
                <button onClick={() => handleGuest()}>Login as a Guest</button>
                <div className="create-new" onClick={() => navigate("/signup")}>
                    <p>Create new Account</p>
                    <span className="material-icons"> arrow_forward_ios </span>
                </div>

            </div>

        </div>
        <ToastContainer />
    </>
}