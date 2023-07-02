import React, { useRef, useEffect} from "react";

import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode'

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";
import { selectUser } from "../../store/UserSlice";

import {logout} from "../../store/UserSlice"

import {toggleDarkMode} from "../../store/darkModeSlice"

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];


  
const Header = () => {

 const {mode} = useSelector((state) => state.darkMode);
 console.log(mode);


  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const user = useSelector(selectUser)

  const dispatch = useDispatch();

  

  

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}
    style={{background: mode ? 'black': 'white', color: mode ? 'white' : 'black' }}
    >
      <Container>
        <div className="nav__wrapper flex justify-between text-center">
          <div className="logo fs-2 fw-bold">
           <Link to='/'> <RestaurantMenuIcon className="fs-1 me-1 text-dark"/></Link>
            Alshain
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links?.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
               <div>
              {
                  user && <div>
                    <span className="me-2">{user.email}</span> 
                  <button className="btn btn-outline-danger"  onClick={(e) => handleLogout(e)}>Logout</button>
                  </div>
                }
              </div>
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">

           

            <span  className="light-mode cursor-pointer" onClick={() => dispatch(toggleDarkMode())}>
             {
              mode ? <DarkModeIcon/> : <LightModeIcon/>
             }
                 
            </span>

            <span className="cart__icon" onClick={toggleCart}>
             <ShoppingCartIcon/>
              <span className="cart__badge">
                {totalQuantity} 
              </span>
            </span>

            <span className="user">
              <Link to="/login">
                <AccountCircleIcon className="text-dark"/>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <MenuIcon/>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;