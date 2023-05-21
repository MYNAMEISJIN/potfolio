import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'


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

const Taps = styled.div`
display:flex;
align-items: center;
padding-left:45%;

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
& a{
  text-decoration:none;
  color:white;
}


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


  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );



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
      {/* <LanguageArea>
        <div>
          
        </div>

      </LanguageArea> */}
      <MobileMenu>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          MENU
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu} style={{backgroundColor:"black"}}>
            <Dropdown.Item eventKey="1" onClick={scrollToTop}>HOME</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="#about">ABOUT</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="#project">
              PROJECT
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={scrollToBottom}>SKILL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </MobileMenu>

    </ContainerForNav>


  )
}

export default NavigationBar
