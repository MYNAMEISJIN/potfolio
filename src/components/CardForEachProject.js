import React from 'react'
import { Card } from 'react-bootstrap'

const CardForEachProject = () => {
    return (
        <div>
            
            <Card style={{ width: '20rem', height:"20rem", border:"none", backgroundColor:"black", color:"white"}}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        text to build on the card title and make up the
                        bulk of the card's content.
                        text to build on the card title and make up the
                        bulk of the card's content.
                        text to build on the card title and make up the
                        bulk of the card's content.

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardForEachProject
