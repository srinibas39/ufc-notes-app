import { useSelector } from "react-redux";
import { NavBar } from "../components/NavBar/NavBar";
import { Signup } from "../components/Signup/Signup";


export const SignupPage = () => {
    const {mode}=useSelector((state)=>state.mode);
    return <div id={mode?"dark-mode":""} style={{minHeight:"100vh"}}>
        <NavBar />
        <Signup />
    </div>
}