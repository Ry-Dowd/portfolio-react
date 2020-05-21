import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Columns = styled.div``
const InfoContent = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100%;
`
const Container = styled.div`
  margin-top: 3rem;
`
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
      <Container id="about">
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
              <p>I'm Creative and curious. I like building things. I like breaking
              things. I like learning how things work. I'm a fan of
              adventures, whether they occur on a tabletop, on a screen, or in
              the great outdoors. I love soccer, I've played it since I could
              walk (or before that depending on who you ask...). I've recently
              discovered the joys of rock-climbing.</p><br />
              <p>Let's build something together.</p>
            </InfoContent>
          </InfoBox>
        </Columns>
      </Container>
    </>
  )
}

export default About
