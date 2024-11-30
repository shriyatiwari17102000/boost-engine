import React from 'react'
import Services from './Pages/Services'
import Layout from './UI/Layout'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import './App.css'
import Contact from './Pages/Contact/Contact'
import Blogs from './Pages/Blogs'

const App = () => {
  return (
    <React.Fragment>
         <Layout>
         <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogs" element={<Blogs />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/project" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} /> */}
      </Routes>
         </Layout>
    
    </React.Fragment>
  )
}

export default App