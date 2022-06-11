import { useNavigate } from "react-router-dom"
import "./NavBar.css"

export const Navbar = () => {
    const navigate = useNavigate();
    return <div className="navBar">
        <div className="navBar-img" onClick={() => navigate("/")}>

            <svg
                className="site-logo"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122 26"

                style={{ cursor: "pointer", height: "100%" }}>
                    
                <path
                    d="M39.78 4.19H25.655L26.83 0h14.12l-1.17 4.19zm-9.57 7.078h7.588l1.172-4.19H24.849L21.5 19.043h6.534l2.175-7.776.001.001zm16.017 3.445a.62.62 0 01-.322-.386.568.568 0 01.008-.286l2.559-9.145a.836.836 0 01.39-.55c.304-.126.634-.18.963-.158h7.053L58.052 0H48.16c-1.8 0-3.056.21-3.789.615-.733.405-1.239 1.115-1.531 2.163l-3.656 13.04a2.637 2.637 0 00-.093.569c-.01.195.008.39.055.581a2.436 2.436 0 001.26 1.52 5.12 5.12 0 002.491.556h10.35l1.187-4.188h-7.576a1.28 1.28 0 01-.636-.143h.005zM7.202 0L2.775 15.818a2.635 2.635 0 00-.095.57c-.01.195.01.39.055.58a2.435 2.435 0 001.271 1.518 5.084 5.084 0 002.489.558h7.364c1.8 0 3.059-.21 3.79-.613.73-.403 1.238-1.117 1.53-2.166L23.724 0H17.19l-3.96 14.148a.836.836 0 01-.39.55c-.305.126-.634.18-.963.156h-1.125c-.22.007-.44-.041-.635-.14a.635.635 0 01-.32-.387.575.575 0 01.008-.286L13.732 0h-6.53zM.81 23.055L0 25.942h51.371l.807-2.887H.81z"
                    fill="#CD1421"
                ></path>
            </svg>
        </div>
        <div className="navBar-content">

            <div onClick={() => navigate("/profile")}>


                <span className="material-icons-outlined"> person </span>
            </div>
            <div onClick={() => navigate("/products")}>

                <span className="material-icons-outlined">
                    inventory_2
                </span>
            </div>
            <div onClick={() => navigate("/cart")}>

                <span className="material-icons-outlined"> shopping_bag </span>
            </div>
            <div onClick={() => navigate("/wishlist")}>

                <span className="material-icons-outlined">
                    favorite_border
                </span>
            </div>

        </div>
    </div>
}