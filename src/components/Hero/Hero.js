
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import HeroSvg from "../../utils/svg/Hero.svg"
import "./Hero.css"
export const Hero = () => {
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.mode)
    return <div className="hero-container" id={mode ? "dark-mode" : ""}>
        <div className="hero" id={mode ? "dark-mode" : ""}>
            <div className="hero-container-text">
                <h2>UFC <span>NOTES</span></h2>
                <div className="hero-container-message">
                    <p>Meet your Modern</p>
                    <span>Note Taking App</span>
                    <small>Manage your daily tasks and workflow in modern way and boost your efficiency without any Effort </small>
                </div>
                <button className="btn-join" onClick={() => navigate("/login")}>JOIN NOW</button>
            </div>
            <div className="hero-container-img">
                <img src={HeroSvg} alt={"hero image"} />
            </div>
        </div>
    </div>
}