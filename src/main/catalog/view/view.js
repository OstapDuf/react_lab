import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { contextAnimals } from "../../../data/dataRecive.js";
import { useContext } from "react";

const AnimalDetail = () => {
  const {animals} = useContext(contextAnimals)
    const { id } = useParams();
    const animal = animals[id];
    console.log("view",animals)
    if (!animal) {
        return <p>Animal not found.</p>; 
    }

    return (
        <Container>
            <Row>
                <Col>
                    <img src={animal.img} alt={animal.title} style={{width:"25rem", height:"30rem"}} />
                    <div><h1>Price: {animal.price}</h1></div>
                </Col>
                <Col className="d-flex flex-column">
                    <h1>{animal.title}</h1>
                    <p>{animal.paragraph}</p>

               
                    <div className="mt-auto d-flex gap-1" >
                        <Link to="/Catalog" style={{ width: 'auto' }}>
                            <Button variant="outline-secondary">Go back</Button>
                        </Link>
                       
                            <Button variant="secondary">Secondary</Button>
                       
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AnimalDetail;