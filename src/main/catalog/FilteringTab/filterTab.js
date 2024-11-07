import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { animals, CardDisplay } from "../card/cardDisplay";

function FiltersButtons() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAnimals, setFilteredAnimals] = useState(animals);
    const [appliedCategory, setAppliedCategory] = useState(''); // для застосованої категорії
    const [appliedPriceRange, setAppliedPriceRange] = useState(''); // для застосованого діапазону ціни

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handlePriceRangeChange = (event) => {
        setSelectedPriceRange(event.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const applyFilters = () => {
        setAppliedCategory(selectedCategory);
        setAppliedPriceRange(selectedPriceRange);
    };

    // Динамічний пошук
    useEffect(() => {
        const filtered = animals.filter((animal) => {
            const searchFilter = animal.title.toLowerCase().includes(searchQuery.toLowerCase());
            const categoryMatch = appliedCategory ? animal.title === appliedCategory : true;
            const price = parseFloat(animal.price.replace('$', ''));
            const priceMatch = (() => {
                if (!appliedPriceRange) return true;
                if (appliedPriceRange === '0-1500') return price >= 0 && price <= 1500;
                if (appliedPriceRange === '1501-2000') return price >= 1501 && price <= 2000;
                if (appliedPriceRange === '2000+') return price > 2000;
                return true;
            })();

            return searchFilter && categoryMatch && priceMatch;
        });

        setFilteredAnimals(filtered);
    }, [searchQuery, appliedCategory, appliedPriceRange]); // Спрацьовує при зміні пошуку або застосованих фільтрів

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Row>
                        <Col xs="auto">
                            <Form.Group controlId="categorySelect">
                                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
                                    <option value="">Select Category</option>
                                    <option value="Majestic Lion">Majestic Lion</option>
                                    <option value="Graceful Deer">Graceful Deer</option>
                                    <option value="Mighty Elephant">Mighty Elephant</option>
                                    <option value="Snoop Dogg">Snoop Dogg</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs="auto">
                            <Form.Group controlId="priceRangeSelect">
                                <Form.Control as="select" value={selectedPriceRange} onChange={handlePriceRangeChange}>
                                    <option value="">Select Price Range</option>
                                    <option value="0-1500">$0 - 1500</option>
                                    <option value="1501-2000">$1501 - $2000</option>
                                    <option value="2000+">2000+</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" style={{ marginLeft: "2rem" }} onClick={applyFilters}>Apply</Button>
                </div>

                <Form.Group controlId="searchInput">
                    <Form.Control
                        type="text"
                        placeholder="Search for an animal..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Form.Group>
            </div>

            <CardDisplay animals={filteredAnimals} />
        </>
    );
}

export default FiltersButtons;
