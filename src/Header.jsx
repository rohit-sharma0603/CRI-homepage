import logoImage from './assets/logo.png'
import './Header.css';

function Header(){
    return(
        <div className="logo">
        <img src={logoImage}  alt="CRI logo"/>
        </div>
    )
}

export  default Header;