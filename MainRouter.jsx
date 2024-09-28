//Luca Fusco
//301165312
//September 21, 2024

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Services from './components/Services'
import Contact from './components/Contact'
import Project from './components/Project'


const MainRouter = () => {
 return (
 <div>
 <Layout/>
 <Routes>
 
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/services" element={<Services />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/project" element={<Project />} />
 
 </Routes>
 </div>
)
}
export default MainRouter
