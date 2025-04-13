import React from 'react';
import CompanyLogo from '../../assets/companyLogo.jpg';
import SearchBar from '../SearchBar/SearchBar';
import UserIcon from '../../assets/userIcon.png';

const Header = () => {
    return(
        <div className="header">
            Header
            <img src={CompanyLogo} alt="Company Logo"/>
            <SearchBar />
            <img src={UserIcon} alt="User Icon" />
        </div>
    )
}
export default Header;