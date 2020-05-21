import React from 'react';
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectContainer = styled.div`
  width: 80vw;
`


const ProjectLeft = (props) => {
  return (
  <li>
    <ProjectContainer className="columns">
        
    </ProjectContainer>
  </li>
  )
}

const ProjectRight = (props) => {
  console.log(props)
  return (
    <li>
      <ProjectContainer className="columns">
        
      </ProjectContainer>
    </li>
  )
}

const Image = (props) => {

}

const Details = (props) => {

}

const Projects = () => {
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
                fluid(maxWidth: 600) {
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
    <>
      <ul>
        {data.allProjectsJson.edges.map((project, index) => {
          if (index % 2 === 0) {
            return <ProjectLeft project={project.node} key={'project'+index}/>
          } else {
            return <ProjectRight project={project.node} key={'project'+index}/>
          }
        })}
      </ul>
    </>
  )
}
export default Projects