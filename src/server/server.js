import express from 'express';
import cors from 'cors';

const animals_obj = [
    {
        id: 0,
        img: "https://images.photowall.com/products/52988/majestic-lion.jpg?h=699&q=85",
        title: "Majestic Lion",
        paragraph: "The lion is known as the king of the jungle. It is a symbol of strength and bravery.",
        price: 1500
    },
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kKBwNQQF7l_IPeM9xlWrJInN78Dvx2QWuw&s",
        title: "Graceful Deer",
        paragraph: "A gentle and elegant animal, often found in forests and grasslands.",
        price: 1200
    },
    {
        id: 2,
        img: "https://live.staticflickr.com/65535/48005964617_73f6b5ffdb_z.jpg",
        title: "Mighty Elephant",
        paragraph: "Known for their intelligence and memory, elephants are one of the largest land animals.",
        price: 3000
    },
    {
        id: 3,
        img: "https://cdn.britannica.com/25/253825-050-57850494/Snoop-Dogg-performs-Pepsi-Super-Bowl-LVI-Halftime-Show.jpg",
        title: "Snoop Dogg",
        paragraph: "Dolphins are social and intelligent marine mammals, known for their playful behavior.",
        price: 2500
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/M/MV5BMjE2OTUwNTk4NF5BMl5BanBnXkFtZTcwMjMwOTk0NA@@._V1_.jpg",
        title: "Snoop Dogg",
        paragraph: "Parrots are known for their vibrant colors and ability to mimic sounds and words.",
        price: 800
    },
    {
        id: 5,
        img: "https://cdn.britannica.com/73/135873-050-735FEF6E/Snoop-Dogg-2008.jpg",
        title: "Snoop Dogg",
        paragraph: "The fastest land animal, cheetahs are built for speed and can reach incredible velocities.",
        price: 2000
    }
];

const app = express();
const port = 3001;
console.log("Starting server...");


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/animals', (req, res) => {
    const { search = '', category = '', price = '' } = req.query;

    const filtered = animals_obj.filter((animal) => {
        const searchFilter = search
            ? animal.title.toLowerCase().includes(search.toLowerCase())
            : true;
        const categoryMatch = category ? animal.title === category : true;
        const priceValue = animal.price;
        const priceMatch = (() => {
            if (!price) return true;
            if (price === '0-1500') return priceValue >= 0 && priceValue <= 1500;
            if (price === '1501-2000') return priceValue >= 1501 && priceValue <= 2000;
            if (price === '2000+') return priceValue > 2000;
            return true;
        })();

        return searchFilter && categoryMatch && priceMatch;
    });

    res.status(200).send(filtered);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
