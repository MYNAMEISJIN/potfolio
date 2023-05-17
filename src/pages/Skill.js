import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LanguageAndFramwork from '../components/LanguageAndFramwork'
import IDEAndOther from '../components/IDEAndOther'
import { Animator, batch, MoveIn, } from "react-scroll-motion";




const ContainerForSkills = styled.div`
background-color:black;
color:white;
min-height:100vh;
max-height:100%;
padding-top:70px;

`


const Skill = () => {




  return (
    <ContainerForSkills>
      <Container>

        <h1 style={{ fontWeight: "600" }}>Skills</h1>
        <Container>
          <LanguageAndFramwork />



          <IDEAndOther />


          
          <div style={{ textAlign: "center" }}>
            <Animator animation={batch(MoveIn(-1000, 0))}>
              call me ;)
            </Animator>
          </div>
        </Container>



      </Container >
    </ContainerForSkills >
  )
}

export default Skill
