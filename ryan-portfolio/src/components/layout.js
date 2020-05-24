/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Component} from "react"
import Landing from "./landing"
import "./layout.css"
import NavBar from './navBar'
import About from './about'
import Projects from './projects'
import styled from'styled-components'

const Backdrop = styled.div`
  background: #f2f2f2;
`

class Layout extends Component {
  state = {
    currentView:'',
  }
  render = () => (
    <>
      <Landing />
      <NavBar />
      <Backdrop>
        <About />
        <Projects />
        {/* <Contact /> */}
      </Backdrop>
    </>
  )
}

export default Layout
