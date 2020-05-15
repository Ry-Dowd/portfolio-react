import React, { Component } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Columns = styled.div``
const InfoContent = styled.div``
const Container = styled.div``
const PhotoColumn = styled.div``
const PhotoBox = styled.div`
  && {
    max-width: 80vw;
    margin: 0 auto;
  }
`
const InfoBox = styled.div``

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/OsornoSelfie.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Container id="about" className="columns is-gapless">
        <Columns className="columns is-gapless">
          <PhotoColumn className="column">
            <PhotoBox className="column">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Ryan and his partner in Chile"
              />
            </PhotoBox>
          </PhotoColumn>
          <InfoBox className="column">
            <InfoContent>
              I'm Creative and curious. I like building things. I like breaking
              things. I like understanding how things work. I'm a fan of
              adventures, whether they occur on a tabletop, on a screen, or in
              the great outdoors. I love soccer, I've played it since I could
              walk (or before that depending on who you ask...). I've recently
              discovered the joys of rock-climbing. I worked in a brewery for a
              few years until one day I realized that I wanted more from life than just
              drinking really, really, ridiculously tasty beverages. 
            </InfoContent>
          </InfoBox>
        </Columns>
      </Container>
    </>
  )
}

export default About
