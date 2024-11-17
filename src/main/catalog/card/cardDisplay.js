import React, { useContext } from "react";
import {CardTail} from "./cardTail.js"; 
import './cards.css';
import { contextAnimals } from "../../../data/dataRecive.js";


export const CardDisplay = () => {
    const {animals} = useContext(contextAnimals)
    console.log(animals)
    if (!animals || animals.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Завантаження...</span>
                </div>
            </div>
        );
    }
    return (
        <div className="cards">
            {animals.map((animal, index) => (
                <CardTail key={index} animal={animal} index={index} />
            
    
            ))}
        </div>
    );
};

