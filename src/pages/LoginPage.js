import { useSelector } from "react-redux";
import { Login } from "../components/Login/Login"
import { NavBar } from "../components/NavBar/NavBar"



export const LoginPage = () => {
    const {mode}=useSelector((state)=>state.mode);
    return <div id={mode?"dark-mode":""} style={{minHeight:"100vh"}}>
        <NavBar />
        <Login />
       
    </div>
}