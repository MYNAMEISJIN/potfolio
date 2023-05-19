import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'


const ClickableComponent = styled.div`
  cursor: pointer;
`;

const ContainerForAbout = styled.div`
background-color:white;
color:black;
min-height:100vh;
max-height:100%;
border-radius: 20px 20px 0px 0px;
display:flex;
justify-content:center;
align-items: center;

`

const FirstWriting = styled.h1`
font-weight:900;
`
const SecondWriting = styled.div`
margin-top:35px;
color:grey;
font-weight:600;
font-size:17px;
max-width: 880px;
`
const ContactArea = styled.div`
display:flex;
justify-content:space-around;
margin-top: 50px;
@media screen and (max-width: 992px) {
  display:block;
}

`
const ContactsHeader = styled.div`
height: "30px";
display:flex;
justify-content:center;
font-weight:600;

`

const ContactFooter = styled.a`
margin-top: 10px;
text-decoration:none;
color:black;
&:hover{
  color:grey;
}
@media screen and (max-width: 992px) {
  display:flex;
  justify-content:center;
  margin-top:5px;
  margin-bottom:25px;
}
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  @media screen and (max-width: 992px) {
  display:none;
}
  
`;
const RotateForWriting = styled.div`
  display: none;
  margin-top: 5px;
  margin-left: 10px;
  
  @media screen and (max-width: 992px) {
    display: flex;
    align-items:center;
    animation: ${rotate} 5s linear infinite;
  
  
}
  
`;

const About = () => {



  return (
    <ContainerForAbout>


      <Container>


        <Row>
          <Col>
            <FirstWriting>


              <div style={{display:"flex"}}>
                <div>
                  Hi
                </div>
                <RotateForWriting>
                  <img src='images/logo512.png' style={{ width: "30px", height:"30px" }} />
                </RotateForWriting>
              </div>
              <div>
                I'm Seongjin Park, JS web developer
              </div>
            </FirstWriting>


            <SecondWriting>
              with a passion for creating exceptional user experiences through my expertise in front-end development. As an growing expert in Applied Software Engineering, I'm dedicated to delivering world-class solutions to clients worldwide.

              My primary focus is on React.js, which enables me to create dynamic and responsive user interfaces, providing consistent experiences across devices.

              Additionally, I have a strong background in node.js express, which allows me develop API.

              Whether you're a startup or an established enterprise, I'm devoted to delivering innovative solutions that meet your unique needs.  let's collaborate and bring your vision to life!
            </SecondWriting>
          </Col>

          <Col lg={3}>
            <Rotate>
              <img src='images/logo512.png' style={{ width: "230px" }} />
            </Rotate>
          </Col>


        </Row>




        <ContactArea>
          <div>
            <ContactsHeader>
              <img src='images/email.png' style={{ width: "25px", }} /> &nbsp;
              Email
            </ContactsHeader>
            <ContactFooter>
              hbay11@naver.com
            </ContactFooter>

          </div>

          <div>
            <ContactsHeader>
              <img src='images/linkedin.png' style={{ width: "25px", }} /> &nbsp;
              LinkedIn
            </ContactsHeader>
            <ContactFooter href="http://www.linkedin.com/in/seongjiny-park" target="_blank" rel="noopener noreferrer">
              http://www.linkedin.com/in/seongjiny-park

            </ContactFooter>
          </div>
          <div>
            <ContactsHeader>
              <img src='images/github.png' style={{ width: "25px", }} /> &nbsp;
              GitHub
            </ContactsHeader>
            <ContactFooter href="https://github.com/MYNAMEISJIN" target="_blank" rel="noopener noreferrer">
              www.github.com/MYNAMEISJIN
            </ContactFooter>

          </div>
        </ContactArea>

      </Container>
    </ContainerForAbout>
  )
}

export default About
