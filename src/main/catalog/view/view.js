import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { contextAnimals } from "../../../data/dataRecive.js";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../redux/slice.js";

const AnimalDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { animals } = useContext(contextAnimals);

    const { id } = useParams();

   
    if (!animals || animals.length === 0) {
        return <p>Animal data is not available.</p>;
    }

  
    const animal = animals.find((a) => a.id === parseInt(id));
    if (!animal) {
        return <p>Animal not found.</p>;
    }

    const handleAddToCart = () => {
        dispatch(
            addItemToCart({
                id: animal.id,
                title: animal.title,
                price: animal.price,
                imageUrl: animal.img,
            })
        );
        setTimeout(() => {
            navigate("/Cart");
        }, 500);
    };
    return (
        <Container>
            <Row>
                <Col>
                    <img
                        src={animal.img}
                        alt={animal.title}
                        style={{ width: "25rem", height: "30rem" }}
                    />
                    <div>
                        <h1>Price: {animal.price}</h1>
                    </div>
                </Col>
                <Col className="d-flex flex-column">
                    <h1>{animal.title}</h1>
                    <p>{animal.paragraph}</p>
                    <div className="mt-auto d-flex gap-1">
                        <Link to="/Catalog" style={{ width: "auto" }}>
                            <Button variant="outline-secondary">Go back</Button>
                        </Link>
                        <Button variant="secondary" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AnimalDetail;
