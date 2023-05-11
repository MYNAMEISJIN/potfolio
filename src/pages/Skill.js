import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LanguageAndFramwork from '../components/LanguageAndFramwork'
import IDEAndOther from '../components/IDEAndOther'
import { useSpring, useScroll, animated } from '@react-spring/web'
import { useState } from 'react'





const ContainerForSkills = styled.div`
background-color:black;
color:white;
height:100vh;
padding-top:70px;

`


const Skill = () => {

  const [callMeActivation, setCallMeActivation] = useState(false)

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress)
      if (scrollYProgress > 1) {
        setCallMeActivation(true)
        
      }
    }
  })

  const callMeAppear = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay:2000,

  })



  return (
    <ContainerForSkills>
      <Container>
        <h1 style={{ fontWeight: "600" }}>Skills</h1>
        <Container>
          <LanguageAndFramwork />



          <IDEAndOther />

          {callMeActivation ?
            <animated.h1
              style={{
                ...callMeAppear,
                textAlign: "center",
                fontWeight: "600"
              }}
            >
              call me ;)

            </animated.h1> :
            <div></div>
          }


        </Container>



      </Container>
    </ContainerForSkills>
  )
}

export default Skill
