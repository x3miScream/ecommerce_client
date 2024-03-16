import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");


    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo}></img>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("shop")}}><Link className='nav-menu-link' to='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => {setMenu("men")}}><Link className='nav-menu-link' to='/men'>Men</Link>{menu === 'men' ? <hr /> : <></>}</li>
                <li onClick={() => {setMenu("women")}}><Link className='nav-menu-link' to='/women'>Women</Link>{menu === 'women' ? <hr /> : <></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link className='nav-menu-link' to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link className='nav-menu-link' to='/login'>
                    <button>Login</button>
                </Link>
                <Link className='nav-menu-link' to='/cart'>
                    <img src={cart_icon}></img>
                </Link>

                <Link className='nav-menu-link' to='/cart'>
                    <div className='nav-cart-count'>10</div>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;