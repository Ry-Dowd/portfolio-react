import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
`
const PhotoBox = styled.div`
  
`
const InfoBox = styled.div`

`



class About extends Component {
  
  render = () => (
    <>
      <Container id='about' className='columns'>
        <PhotoBox className='column'>I'm a photo box</PhotoBox>
        <InfoBox className='column'>I'm the info box</InfoBox>
      </Container>
    </>
  )
}

export default About