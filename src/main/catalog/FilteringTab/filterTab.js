import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { contextAnimals } from "../../../data/dataRecive.js";


function FiltersButtons() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const { animalReceive } = useContext(contextAnimals);

    const applyFilters = () => {
        const query = {};
        if (selectedCategory) query.category = selectedCategory;
        if (selectedPriceRange) query.price = selectedPriceRange;
        if (searchQuery) query.search = searchQuery;

        animalReceive(query); 
    };

    useEffect(() => {
        const query = {};
        if (selectedCategory) query.category = selectedCategory;
        if (selectedPriceRange) query.price = selectedPriceRange;
        if (searchQuery) query.search = searchQuery;

        animalReceive(query); 
    }, [searchQuery]);

    return (
        <div className="d-flex justify-content-between align-items-center">
            <Row>
                <Col xs="auto">
                    <Form.Group controlId="categorySelect">
                        <Form.Control
                            as="select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">Виберіть категорію</option>
                            <option value="Majestic Lion">Величний лев</option>
                            <option value="Graceful Deer">Грайливий олень</option>
                            <option value="Mighty Elephant">Могутній слон</option>
                            <option value="Snoop Dogg">Снуп Догг</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Form.Group controlId="priceRangeSelect">
                        <Form.Control
                            as="select"
                            value={selectedPriceRange}
                            onChange={(e) => setSelectedPriceRange(e.target.value)}
                        >
                            <option value="">Виберіть ціновий діапазон</option>
                            <option value="0-1500">$0 - 1500</option>
                            <option value="1501-2000">$1501 - $2000</option>
                            <option value="2000+">2000+</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="searchInput">
                <Form.Control
                    type="text"
                    placeholder="Шукайте тварин..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Form.Group>
            <Button
                variant="primary"
                style={{ marginLeft: "2rem" }}
                onClick={applyFilters}
            >
                Застосувати
            </Button>
        </div>
    );
}

export default FiltersButtons;