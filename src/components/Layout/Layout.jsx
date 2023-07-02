import React from 'react'

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from '../../routes/Routers'
import Carts from '../UI/cart/Carts'
import { useSelector } from 'react-redux'

// import mode from "../../store/darkModeSlice"

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
  <div
  //  style={{background: mode ? 'black' : 'white' ,color : mode ? 'white' : 'black'}}
   >
    <Header/>
    {showCart && <Carts/>}
    <Routers/>
    <Footer/>
</div>
 
  )
}
                  
export default Layout