import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Hero } from "../components/Hero/Hero"
import { NavBar } from "../components/NavBar/NavBar"

export const HomePage = () => {
    return <>
        <NavBar />
        <AutoComplete />
        <Hero />
    </>
}