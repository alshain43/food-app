import React from 'react'
import "./App.css"
import Layout from "../src/components/Layout/Layout"
import mode from "../src/components/Header/Header"

import { useSelector } from "react-redux";
import { useState, useMemo } from "react";




const App = () => {


  return (
  //   <ThemeProvider>
  //   <Layout/>
  // </ThemeProvider>
  <div>
    <Layout/>
  </div>
  )
}

export default App
