import React from 'react';
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectContainer = styled.div`
  width: 80vw;
  margin: auto;
`


const ProjectLeft = (props) => {
  return (
    <li>
      <ProjectContainer>
        <div className="columns is-gapless">
        <Image image={props.project.image} title={props.project.title}>
        </Image>
      <Details className='column'>

      </Details>
        </div>
      </ProjectContainer >
    </li >
  )
}

const ProjectRight = (props) => {
  console.log(props)
  return (
    <li>
      <ProjectContainer className="columns">
        <Details className='column'>
        </Details>
        <Image className='column' image={props.project.image} title={props.project.title}>
        </Image>
      </ProjectContainer>
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
    </div>
  )
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
            return <ProjectLeft project={project.node} key={'project' + index} />
          } else {
            return <ProjectRight project={project.node} key={'project' + index} />
          }
        })}
      </ul>
    </>
  )
}
export default Projects