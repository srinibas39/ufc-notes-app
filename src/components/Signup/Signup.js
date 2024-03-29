import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import "./Signup.css"
import { useDispatch, useSelector } from "react-redux";
import { loadSignup } from "../../features/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleToast, handleToastError } from "../../utils/ToastUtils/toastUtils";

export const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    });

    const { token } = useSelector((state) => state.auth)


    const dispatch = useDispatch();


    const signupToast = () => {
        handleToast("signing you in");
    }

    const handleSubmit = () => {
        signupToast();
        setTimeout(() => dispatch(loadSignup(form)), 1000);
    }
    const handleDetails = () => {
        setForm({
            ...form, firstName: "sriyasri",
            lastName: "khuntia",
            username: "sriyasrikhuntia191@gmail.com",
            password: "12345678"
        })
        
    }
    useEffect(() => {
        if (token) {
            navigate("/notes");
        }
    }, [token])


    return <>
        <div className="signup-container">
            <div className="signup">
                <h2>Sign up</h2>
                <div className="firstname-container">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                </div>
                <div className="lastname-container">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
                <div className="email-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>

                <button className="btn-register" onClick={() => handleDetails()}>Fill up the fields</button>
                <button className="btn-register" onClick={() => handleSubmit()}>Create New Account</button>
                <div className="account-login" onClick={() => navigate("/login")}>
                    <p>Already have an account</p>
                    <span className="material-icons"> arrow_forward_ios </span>
                </div>
            </div>
        </div>

        <ToastContainer />
    </>
}