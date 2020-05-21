import React, { Component } from "react"
import styled from "styled-components"

const NavContainer = styled.nav`
  background-color: black;
  color: white;
  position: sticky;
  top:0;
`
const Brand = styled.div`
  color: teal;
`
const MenuItem = styled.a`
  && {
    background:black;
    text-decoration: none;
    color: teal;
    border: 2px solid black;
    transition: border-color 0.3s linear, color 0.3s linear;
    &:hover,
    &:focus,
    &:focus-within {
      color: white;
      background-color: black;
      border: 2px solid transparent;
      border-top-color: white;
      border-left-color: white;
      border-bottom-color: white;
      border-right-color: white;
      transition: border-top-color 0.4s linear,
        border-left-color 0.4s linear 0.1s, border-bottom-color 0.4s linear 0.2s,
        border-right-color 0.4s linear 0.3s, color 0.4s linear;
    }
  }
`
const NavMenu = styled.div`
  &&{
    background:black;
    padding:0;
  }
`

const Burger = styled.a`
  &&{
    color:teal;
  }
`
class NavBar extends Component {
  state = {
    menuExpanded: false,
  }

  toggleActive = () => {
    this.setState(state => {
      return { menuExpanded: !state.menuExpanded }
    })
  }

  scrollToSection = (section) => {
    const coords = document.getElementById(section).getBoundingClientRect()
    console.log(coords)
    if (this.state.menuExpanded) {
      const top = coords.top - 180
      window.scrollBy({ top: top, behavior: 'smooth' })
      this.setState({ menuExpanded: false })
    } else {
      const top = coords.top - 50
      window.scrollBy({ top: top, behavior: 'smooth' })
    }
  }

  render = () => (
    <NavContainer
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      id="nav"
    >
      <Brand className="navbar-brand">
        <Burger
          role="button"
          className={
            this.state.menuExpanded
              ? "navbar-burger is-active"
              : "navbar-burger"
          }
          aria-label="menu"
          aria-expanded="false"
          onClick={this.toggleActive.bind(this)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </Burger>
      </Brand>
      <NavMenu
        className={
          this.state.menuExpanded ? "navbar-menu is-active" : "navbar-menu"
        }
      >
        <div className="navbar-start">
          <MenuItem onClick={() => this.scrollToSection('about')} className="navbar-item">About Me</MenuItem>
          <MenuItem href='#projects' className="navbar-item">Projects</MenuItem>
          <MenuItem href='#contact' className="navbar-item">Contact</MenuItem>
        </div>
        <div className="navbar-end"></div>
      </NavMenu>
    </NavContainer>
  )
}

export default NavBar
