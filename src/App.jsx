import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from '../MainRouter';
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
