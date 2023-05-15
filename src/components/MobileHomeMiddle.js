import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web'

const MobileHomeMiddle = () => {

    const floatingStyleSun = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 40,
        },
        from: { y: 0 },
        to: [
            { y: 10 },
            { y: 0 }
        ],
    })

    const starsOpacity1 = useSpring({ //for empty stars
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    })

    const starsOpacity2 = useSpring({//for stars
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    })

    const upAndDownSun = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 5600,
    })

    return (
        <div>
            <Row>

                <Col style={{ display: "flex", justifyContent: "space-around" }}>

                    <animated.div style={{ ...starsOpacity1, position: 'relative', top: "30%" }}>
                        <img src='images/emptystar.png' style={{ width: "40px", height: "40px", }} />
                    </animated.div>

                    <animated.div
                        style={{
                            ...upAndDownSun,
                        }}
                    >

                        <animated.div
                            style={{
                                ...floatingStyleSun, position: 'relative', top: "10%"
                            }}
                        >
                            <img src='images/sun.png' style={{ width: "245px" }} />
                        </animated.div>
                    </animated.div>


                    <animated.div style={{ ...starsOpacity2, position: 'relative', }}>
                        <img src='images/star2.png' style={{ width: "40px", height: "35px", }} />
                    </animated.div>
                </Col>


            </Row>
        </div>
    )
}

export default MobileHomeMiddle
