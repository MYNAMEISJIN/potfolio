import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FaReact, } from 'react-icons/fa';
import { SiStyledcomponents, SiJavascript, SiNodedotjs,SiBootstrap } from "react-icons/si";


const LanName = styled.h5`
font-weight:600;
height:48px;
display:flex;
align-items:center;
`
const BoxForLogo = styled.div`
width:30px;
height:30px;
margin-right:10px;
`

const LFDescription = styled.div`
margin-bottom:30px;
color:rgb(158, 158, 158 );
min-width: 48px;
`

const LanguageAndFramwork = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div>
                <h2 style={{ borderBottom: "solid 1px white", paddingBottom: "20px", marginBottom: "20px", marginTop: "20px", fontWeight: "600" }}>Language / Framework</h2>
            </div>
            <Row className='lg-mb-3'>
                <Col >
                    <LanName>
                        <BoxForLogo>
                            <FaReact style={{width:"100%",height:"100%"}}/>
                        </BoxForLogo>
                        React.JS
                    </LanName>
                    <LFDescription>
                        main framework. redux, react query, react-spring
                    </LFDescription>

                </Col>
                <Col >
                    <LanName>
                        <BoxForLogo>
                            <SiJavascript style={{width:"100%",height:"100%"}}/>
                        </BoxForLogo>
                        Javascript
                    </LanName>
                    <LFDescription>
                        javascript using
                    </LFDescription>
                </Col>

                <Col >
                    <LanName>
                        <BoxForLogo>
                            <SiNodedotjs style={{width:"100%",height:"100%"}} />
                        </BoxForLogo>
                        Node.JS
                    </LanName>
                    <LFDescription>
                        express, react.js, javascript
                    </LFDescription>
                </Col>
                <Col >
                    <LanName>
                        <BoxForLogo>
                            <SiBootstrap style={{width:"100%",height:"100%"}}/>
                        </BoxForLogo>
                        Bootstrap
                    </LanName>
                    <LFDescription>
                        interactive web-app
                    </LFDescription>
                </Col>
            </Row>
            <Row className='lg-mb-3'>
                <Col >
                    <LanName>
                        <BoxForLogo>
                            <SiStyledcomponents style={{width:"100%",height:"100%"}}/>
                        </BoxForLogo>
                        Styled-components
                    </LanName>
                    <LFDescription>
                        customising css and html
                    </LFDescription>

                </Col>
                <Col >
                    
                </Col >

                <Col className='d-none d-lg-block'>

                </Col>
                <Col className='d-none d-lg-block'>

                </Col>
            </Row>
        </div>
    )
}

export default LanguageAndFramwork
