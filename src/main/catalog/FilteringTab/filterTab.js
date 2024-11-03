import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {animals} from "../card/cardDisplay";

function FiltersButtons() {
    const [category, setCategory] =  useState("")
    const [price, setPrice] =  useState("")


    const changeCategory = (event) => {
        setCategory(event.target.value)

    }
    const changePrice = (event) => {
        setPrice(event.target.value)
    }

    const filters = () => {
       animals.filter()
    }

    return (
        <div className="d-flex justify-content-between align-items-center">
            <Row>
                <Col xs="auto">
                    <Form.Group controlId="categorySelect">

                        <Form.Control  as="select">
                            <option value="">Select Category</option>
                            <option value="Snoop_Dogg">Snoop Dogg</option>

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Form.Group controlId="priceRangeSelect">
                        <Form.Control  as="select">
                            <option value="">Select Price Range</option>
                            <option value="0-1500">$0 - 1500</option>
                            <option value="1501-2000">$1501 - $2000</option>
                            <option value="2000+">2000+</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" className="ml-auto">Apply</Button>
        </div>
    );
}

export default FiltersButtons;
