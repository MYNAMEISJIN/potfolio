import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web'

const MobileHomeBottom2 = () => {
    const floatingStyle3_2 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 50,
        },
        from: { y: 0 },
        to: [
            { y: -13 },
            { y: 0 }
        ],
    })


    const starsOpacity3 = useSpring({ //for dusts
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3000,
    })

    const upAndDown2 = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 4800,
    })


    return (
        <div>
            <Row className='pb-5 mb-5'>
                <Col style={{ display: "flex", justifyContent: "center" }}>

                    <animated.div
                        style={{
                            ...upAndDown2,
                        }}
                    >
                        <animated.div
                            style={{
                                ...floatingStyle3_2, position: "relative", left: "20%"
                            }}
                        >
                            <img src='images/earth_with_moon.png' style={{ width: "140px" }} />

                        </animated.div>
                    </animated.div>


                </Col>
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <animated.div style={{ ...starsOpacity3, position: "relative", top: "50%" }}>
                        <img src='images/dust3.png' style={{ width: "25px", height: "25px", }} />
                    </animated.div>

                </Col>

            </Row>
        </div>
    )
}

export default MobileHomeBottom2
