import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router";
import useOnline from "../../utils/useOnline";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnline();
    useEffect(() => {
        
    }, []);
    
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/about">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;