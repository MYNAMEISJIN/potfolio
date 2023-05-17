import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { SiVisualstudiocode } from "react-icons/si";
import { BsGit } from "react-icons/bs";

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


const IDEAndOther = () => {
    return (
        <div style={{backgroundColor:"black"}}>
            <div>
                <h2 style={{ borderBottom: "solid 1px white", paddingBottom: "20px", marginBottom: "20px", marginTop: "20px", fontWeight: "600" }}>IDE / Others</h2>
            </div>
            <Row className='lg-mb-3'>
                <Col>
                    <LanName>
                        <BoxForLogo >
                            <SiVisualstudiocode style={{width:"90%",height:"90%"}}/>
                        </BoxForLogo>
                        Visual Studio Code
                    </LanName>
                    <LFDescription>
                        development editing
                    </LFDescription>

                </Col>
                <Col >
                    <LanName>
                        <BoxForLogo >
                            <BsGit style={{width:"90%",height:"90%"}}/>
                        </BoxForLogo>
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
