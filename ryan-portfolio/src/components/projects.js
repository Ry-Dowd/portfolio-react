import React, {useRef, useLayoutEffect, useState} from 'react';
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useScrollPosition from '../hooks/useScrollPosition'

const ProjectContainer = styled.div`
  width: 80vw;
  margin: auto;
  margin-top:2rem;
  background:#000;
  border-radius:4px;
  border: 3px solid 
`
const Title = styled.div`
  text-align: center;
`

const ReverseColumn = styled.div`
  flex-direction: row-reverse;
`

const ProjectLeft = (props) => {
  
  return (
    <li>
      <ProjectContainer>
        <div className="columns is-gapless">
          <Image image={props.project.image} title={props.project.title}>
          </Image>
          <Details project={props.project}>
          </Details>
        </div>
      </ProjectContainer >
    </li >
  )
}

const ProjectRight = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <li>
      <ProjectContainer>
        <ReverseColumn className="columns is-gapless">
          <Image image={props.project.image} title={props.project.title}>
          </Image>
          <Details project={props.project}>
          </Details>
        </ReverseColumn>
      </ProjectContainer >
    </li>
  )
}

const Image = (props) => {
  return (
    <>
      <div className="column">
        <Img fluid={props.image.childImageSharp.fluid} alt={"screenshot of " + props.title} />
      </div>
    </>
  )
}

const Details = (props) => {
  return (
    <div className="column">
      <Title className='title is-3'>{props.project.title}</Title>
    </div>
  )
}

const Projects = () => {
  useScrollPosition(({currentPosition}) => {
    console.log(currentPosition)
  })
  
  const data = useStaticQuery(graphql`
    query{
      allProjectsJson{
        edges{
          node{
            title
            description
            link
            technologies
            github
            image{
              childImageSharp {
                fluid(maxWidth: 600, maxHeight:400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div id='projects' className='section'>
      <h2 className="title is-2">Projects</h2>
      <ul>
        {data.allProjectsJson.edges.map((project, index) => {
          if (index % 2 === 0) {
            return <ProjectLeft project={project.node} key={'project' + index} />
          } else {
            return <ProjectRight project={project.node} key={'project' + index} />
          }
        })}
      </ul>
    </div>
  )
}
export default Projects