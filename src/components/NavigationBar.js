import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'


const ContainerForNav = styled.div`
position:fixed;
top:0px;
background-color: black;
display:flex;
color: white;
padding-top:10px;
padding-right: 40px;
padding-left:40px;
z-index:10;
width:100%;


`
const LanguageArea = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
width:100%;
@media screen and (max-width: 992px) {
  display: none;
}
`

const Taps = styled.div`
display:flex;
align-items: center;

 & a{
    padding:8px 8px 0px 8px;
    font-weight:500;
    text-decoration: none;
    color:white;
}
@media screen and (max-width: 992px) {
  display: none;
}
`
const InitialH = styled.h1`
font-size: 40px;
font-weight: 900;
margin:0px 200px 0px 0px;
text-decoration:none;
padding:0;
&:hover{
  cursor: pointer;
  
}


`

const MobileMenu = styled.h5`
display: none;
font-weight: 600;


@media screen and (max-width: 992px) {
display:flex;
justify-content: flex-end;
align-items: center;
width:100%;
  
}

`
const NavigationBar = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const scrollToBottom = () => {
    window.scrollTo(0, 10000)
  }





  return (


    <ContainerForNav>

      <InitialH href="#home" onClick={scrollToTop}>
        SJ
      </InitialH>
      <Taps>

        <a href="#home" onClick={scrollToTop}>
          HOME
        </a>

        <a href="#about">
          ABOUT
        </a>
        <a href="#project">
          PROJECT
        </a>

        
        <Link to="#skill" onClick={scrollToBottom}>
          SKILL
        </Link>



      </Taps>
      <LanguageArea>
        <div>
          Language
        </div>

      </LanguageArea>
      <MobileMenu>
        <div> MENU</div>
      </MobileMenu>

    </ContainerForNav>


  )
}

export default NavigationBar
