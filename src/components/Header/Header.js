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
        <div className='flex justify-between bg-pink-100 shadow-lg '>
            <div className='logo-container'>
                <img className="w-52" src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/about">
                            About us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-4" >
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4">Cart</li>
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