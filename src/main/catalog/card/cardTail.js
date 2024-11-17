import { Card, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

export const CardTail = (props) => {
    const { animal = {},index} = props;
    return (
        <Card style={{ width: '15rem', border: '1px solid #ddd' }}>
            <Card.Img
                variant="top"
                src={animal.img}
                style={{
                    height: '18.5rem',
                    objectFit: 'cover',
                    padding: '10px'
                }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                <Card.Title>{animal.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem', color: '#666' }}>
                    {animal.paragraph}
                </Card.Text>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <div style={{ fontWeight: 'bold' }}>Price:</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333' }}>{animal.price}</div>
                </div>

                <Link to={`/catalog/${index}`} style={{ marginTop: 'auto' }}>
                    <Button variant="dark" style={{ width: '100%' }}>View more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};
