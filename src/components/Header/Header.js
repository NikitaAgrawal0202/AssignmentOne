import { LOGO_URL } from "../../utils/constant";

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>About us</li>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;