import { Link } from "react-router-dom"
import "./Error.css"
export const Error = () => {
    return <div className="error-container">
        <div className="error">
            <div>ERROR 404</div>
            <div>Page Not Found</div>
            <Link to="/" style={{ textDecoration: "none" }}><button>BACK TO HOME</button></Link>
        </div>
    </div>
}