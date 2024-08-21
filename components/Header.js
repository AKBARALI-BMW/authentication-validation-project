import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <h1>ShopLogo</h1>
            </div>
            <div className="navbar_link">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/users">User</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
