import { useSelector } from "react-redux"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Hero } from "../components/Hero/Hero"
import { NavBar } from "../components/NavBar/NavBar"

export const HomePage = () => {
    const { mode } = useSelector((state) => state.mode)
    return <div id={mode ? "dark-mode" : ""}>
        <NavBar />
        <Hero />
    </div>
}