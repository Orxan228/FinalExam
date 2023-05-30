import React from 'react'
import "./Header.scss"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
        <div className="header__top">
            <div className="header__top__left"><PhoneEnabledIcon/> +880 1911 854 378 <EmailIcon/>backpiper.com@gmail.com</div>
            <div className="header__top__right">
                <ul>
                    <li><FacebookIcon sx={{ fontSize: "20px"}}/></li>
                    <li><TwitterIcon sx={{ fontSize: "20px"}}/></li>
                    <li><GoogleIcon sx={{ fontSize: "20px"}}/></li>
                    <li><LinkedInIcon sx={{ fontSize: "20px"}}/></li>
                    <li><PinterestIcon sx={{ fontSize: "20px"}}/></li>
                </ul>
            </div>
        </div>
        <div className="header__bottom">
            <div className="header__bottom__left">
                <img src="https://preview.colorlib.com/theme/onepro/img/logo.png.webp" alt="" />
            </div>
            <div className="header__bottom__right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add</Link></li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Team</li>
                    <li>Clients</li>
                    <li>Pricing</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
