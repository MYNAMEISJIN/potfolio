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


const IDEAndOther = () => {
    return (
        <div>
            <div>
                <h2 style={{ borderBottom: "solid 1px white", paddingBottom: "20px", marginBottom: "20px", marginTop: "20px", fontWeight: "600" }}>IDE / Others</h2>
            </div>
            <Row className='lg-mb-3'>
                <Col sm={6} md={3}>
                    <LanName>
                        <BoxForLogo />
                        Visual Studio Code
                    </LanName>
                    <LFDescription>
                        development editing
                    </LFDescription>

                </Col>
                <Col sm={6} md={3}>
                    <LanName>
                        <BoxForLogo />
                        Git
                    </LanName>
                    <LFDescription>
                        github using
                    </LFDescription>
                </Col>

                <Col>
                   
                </Col>
                <Col >
                    
                </Col>
            </Row>
           
        </div>
    )
}

export default IDEAndOther
