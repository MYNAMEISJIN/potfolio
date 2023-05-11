import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'




const ContainerForAbout = styled.div`
background-color:white;
color:black;
height:100vh;
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
`
const ContactsHeader = styled.div`
height: "30px";
display:flex;
justify-content:center;
font-weight:600;
`



const About = () => {



  return (
    <ContainerForAbout>


      <Container>

        <FirstWriting>
          

          <div>
            Hi
          </div>
          <div>
            I'm Seongjin Park, JS web developer
          </div>
        </FirstWriting>


        <SecondWriting>
          with a passion for creating exceptional user experiences through my expertise in front-end development. As an growing expert in Applied Software Engineering, I'm dedicated to delivering world-class solutions to clients worldwide.

          My primary focus is on React.js, which enables me to create dynamic and responsive user interfaces, providing consistent experiences across devices.

          Additionally, I have a strong background in node.js and Next.js, which allows me develop scalable, high-performance applications.

          Whether you're a startup or an established enterprise, I'm devoted to delivering innovative solutions that meet your unique needs.  let's collaborate and bring your vision to life!
        </SecondWriting>


        <ContactArea>
          <div>
            <ContactsHeader>
              <img src='images/email.png' style={{ width: "25px", marginBottom: "10px" }} /> &nbsp;
              Email
            </ContactsHeader>
            <div>
              seongjin@gmail.com
            </div>

          </div>

          <div>
            <ContactsHeader>
              <img src='images/linkedin.png' style={{ width: "25px", marginBottom: "10px" }} /> &nbsp;
              LinkedIn
            </ContactsHeader>
            <div>
              this is for my LinkedIn address
            </div>
          </div>
          <div>
            <ContactsHeader>
              <img src='images/github.png' style={{ width: "25px", marginBottom: "10px" }} /> &nbsp;
              GitHub
            </ContactsHeader>
            <div>
              this is for my github address
            </div>

          </div>
        </ContactArea>




      </Container>
    </ContainerForAbout>
  )
}

export default About