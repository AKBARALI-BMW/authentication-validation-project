import { NavLink } from "react-router-dom";
import Header from "../components/Header";


function Notfound() {
    return (
        <div className="dashboard">
            <h1>OOp 404! page or not found...</h1>
            <NavLink to={"/"}> Go to Dashboard</NavLink>
        </div>
    );
}

export default Notfound;