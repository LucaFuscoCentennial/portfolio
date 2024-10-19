import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from '../MainRouter';
//COMP229-PORTFOLIO
//Main app page
//Luca Fusco
//301165312
//September 28, 2024

function App() {

  return (
  <Router>
      <MainRouter />
  </Router>
  )
}

export default App
