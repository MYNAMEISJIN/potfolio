import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'



const LanName = styled.h5`
font-weight:600;
display:flex;
align-items:center;
`
const BoxForLogo = styled.div`
width:30px;
height:30px;
background-color:white;
margin-right:10px;
`

const LFDescription = styled.div`
margin-bottom:30px;
color:rgb(158, 158, 158 );
min-width: 48px;
`

const LanguageAndFramwork = () => {
    return (
        <div>
            <div>
                <h2 style={{ borderBottom: "solid 1px white", paddingBottom: "20px", marginBottom: "20px", marginTop: "20px", fontWeight: "600" }}>Language / Framework</h2>
            </div>
            <Row className='lg-mb-3'>
                <Col>
                    <LanName>
                        <BoxForLogo />
                        React.JS
                    </LanName>
                    <LFDescription>
                        main framework. redux, react query, react-spring
                    </LFDescription>

                </Col>
                <Col>
                    <LanName>
                        <BoxForLogo />
                        Javascript
                    </LanName>
                    <LFDescription>
                        javascript using
                    </LFDescription>
                </Col>

                <Col>
                    <LanName>
                        <BoxForLogo />
                        Node.JS
                    </LanName>
                    <LFDescription>
                        express, react.js, javascript
                    </LFDescription>
                </Col>
                <Col>
                    <LanName>
                        <BoxForLogo />
                        Bootstrap
                    </LanName>
                    <LFDescription>
                        interactive web-app
                    </LFDescription>
                </Col>
            </Row>
            <Row className='lg-mb-3'>
                <Col>
                    <LanName>
                        <BoxForLogo />
                        Styled-components
                    </LanName>
                    <LFDescription>
                        customising css and html
                    </LFDescription>

                </Col>
                <Col>
                    <LanName>
                        <BoxForLogo />
                        Express
                    </LanName>
                    <LFDescription>
                        backend API development
                    </LFDescription>
                </Col>

                <Col>
                 
                </Col>
                <Col>
                   
                </Col>
            </Row>
        </div>
    )
}

export default LanguageAndFramwork
