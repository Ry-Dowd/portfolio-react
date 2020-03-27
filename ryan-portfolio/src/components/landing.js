import React, { Component } from "react"
import styled from "styled-components"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Text = styled.div`
  max-width: 80vw;
  color: white;
  margin: 0 auto;
`

const Button = styled.button`
  margin: 0 auto;
  background: teal;
  border: 3px solid white;
  color: white;
  margin-top: 2rem;
`

class Landing extends Component {
  render = () => (
    <Container>
      <Text>Hey there, I'm Ryan Dowd</Text>
      <Text>I'm a Full-Stack Software Developer</Text>
      <Button>Learn More</Button>
    </Container>
  )
}

export default Landing
