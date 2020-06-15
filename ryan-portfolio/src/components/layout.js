/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import Landing from "./landing"
import "./layout.css"
import NavBar from './navBar'
import About from './about'
import Projects from './projects'
import styled from'styled-components'

const Backdrop = styled.div`
  background: #000;
  color:#e6f4f1;
`

const Layout = () => {
  
  const [currentView, setCurrentView] = useState('')
  
  return (
    <>
      <Landing />
      <NavBar currentView={currentView} />
      <Backdrop className='section'>
        <About setView={setCurrentView}/>
        <Projects setView={setCurrentView}/>
        {/* <Contact /> */}
      </Backdrop>
    </>
  )
}

export default Layout
