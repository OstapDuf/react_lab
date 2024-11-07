import {CardTail} from "./cardTail.js";
import './cards.css';
import filteredAnimals from "../FilteringTab/filterTab.js"

export const animals = [
    {
        img: "https://images.photowall.com/products/52988/majestic-lion.jpg?h=699&q=85",
        title: "Majestic Lion",
        paragraph: "The lion is known as the king of the jungle. It is a symbol of strength and bravery.",
        price: "$1500"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kKBwNQQF7l_IPeM9xlWrJInN78Dvx2QWuw&s",
        title: "Graceful Deer",
        paragraph: "A gentle and elegant animal, often found in forests and grasslands.",
        price: "$1200"
    },
    {
        img: "https://live.staticflickr.com/65535/48005964617_73f6b5ffdb_z.jpg",
        title: "Mighty Elephant",
        paragraph: "Known for their intelligence and memory, elephants are one of the largest land animals.",
        price: "$3000"
    },
    {
        img: "https://cdn.britannica.com/25/253825-050-57850494/Snoop-Dogg-performs-Pepsi-Super-Bowl-LVI-Halftime-Show.jpg",
        title: "Snoop Dogg",
        paragraph: "Dolphins are social and intelligent marine mammals, known for their playful behavior.",
        price: "$2500"
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BMjE2OTUwNTk4NF5BMl5BanBnXkFtZTcwMjMwOTk0NA@@._V1_.jpg",
        title: "Snoop Dogg",
        paragraph: "Parrots are known for their vibrant colors and ability to mimic sounds and words.",
        price: "$800"
    },
    {
        img: "https://cdn.britannica.com/73/135873-050-735FEF6E/Snoop-Dogg-2008.jpg",
        title: "Snoop Dogg",
        paragraph: "The fastest land animal, cheetahs are built for speed and can reach incredible velocities.",
        price: "$2000"
    }
];

export const CardDisplay = ({animals = []}) => {
    return (
        <div className="cards" >
            {animals.map((animal, index) => (
                <CardTail key={index} animal={animal} index={index}/>
            ))}
        </div>
    )
}


