import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'



const LanName = styled.h5`
font-weight:600;
height:48px;
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
        <div style={{backgroundColor:"black"}}>
            <div>
                <h2 style={{ borderBottom: "solid 1px white", paddingBottom: "20px", marginBottom: "20px", marginTop: "20px", fontWeight: "600" }}>IDE / Others</h2>
            </div>
            <Row className='lg-mb-3'>
                <Col>
                    <LanName>
                        <BoxForLogo />
                        Visual Studio Code
                    </LanName>
                    <LFDescription>
                        development editing
                    </LFDescription>

                </Col>
                <Col >
                    <LanName>
                        <BoxForLogo />
                        Git
                    </LanName>
                    <LFDescription>
                        github using
                    </LFDescription>
                </Col >

                <Col className='d-none d-lg-block'>
                   
                </Col>
                <Col className='d-none d-lg-block'>
                    
                </Col>
            </Row>
        
           

        </div>
    )
}

export default IDEAndOther
