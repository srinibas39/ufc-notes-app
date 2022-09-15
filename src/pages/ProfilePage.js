import { useSelector } from "react-redux"
import { NavBar } from "../components/NavBar/NavBar"
import { Profile } from "../components/Profile/Profile"


export const ProfilePage = () => {
   
    const {mode}=useSelector((state)=>state.mode);

    return <div id={mode?"dark-mode":""} style={{minHeight:"100vh"}}>
        <NavBar />
        <Profile />
    </div>
}