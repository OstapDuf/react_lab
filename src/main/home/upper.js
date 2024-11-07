import { Col, Container, Row } from "react-bootstrap"
import shop from "./shop.png"

export const Upper = () => {
    return (
        <Container >
        <Row className="mt-3">
            <Col xs={5}>
            <img src={shop} className="img-fluid"></img>
            </Col>
            <Col>
            <h1>Snoop Dogg`s Pet store</h1>
            <p>
            Snoop Dogg's Pet Store is a fun
             and unique pet store inspired 
             by the rapper Snoop Dogg. 
             Known for its playful vibe, 
             this pet store offers a wide 
             range of pet supplies, from gourmet 
             treats and stylish apparel to unique toys. 
             The store caters to dogs, cats, and other pets,
              providing items with a bit of Snoop's flair and personality.</p>
            </Col>
        </Row>
        
        </Container>
    )
    
}