import { Col, Container, Row ,Button } from "react-bootstrap"
import "./main.css"


const TailCard = (props) =>{
   
    return(
        <>
        <Container style={{width: '15rem'}}>
        <img src={props.img} className="img__card"></img>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        </Container>
    </>
    )

}

export const Card = () => {
    return (  <Container>
        <Row>
            <Col><TailCard  img="https://img.freepik.com/free-psd/view-adorable-pet-dog_23-2150161739.jpg?t=st=1729973005~exp=1729976605~hmac=fbf71315e0e262d9c70435591c159abc57fb35f158089df76a3173e4e7a7111c&w=740" title="Dog" paragraph="Dogs are loyal and affectionate animals, 
            known for their companionship and protective nature. They come in various breeds, sizes, 
            and temperaments, making them adaptable to many types of households."></TailCard></Col>
            <Col><TailCard  img="https://i.natgeofe.com/n/51e55eeb-dfbe-4b43-9079-685ee97c449d/naturepl_01154678_2x3.jpg" title="Hippo" paragraph="The hippopotamus is a massive, semi-aquatic
             mammal native to Africa, spending much of its time in rivers and lakes. Despite their bulky 
             bodies, hippos are surprisingly fast on land and can be highly territorial."></TailCard></Col>
            <Col><TailCard  img= "https://img.freepik.com/free-psd/dinosaur-anatomy_23-2151862159.jpg?t=st=1729973091~exp=1729976691~hmac=d9dccea13da17b0de6bbbc2f532157a6676abff145408f4d6c0675a9052b38f3&w=740" title="T-Rex" paragraph="The Tyrannosaurus rex, or T-Rex, was one 
            of the largest carnivorous dinosaurs, dominating its ecosystem millions of years ago. 
            Known for its massive jaws and sharp teeth, it was a formidable predator. "></TailCard></Col>
        </Row>
    </Container>)
  
}

export const DownButton = () => {
    return(
        <Container className="center__button mt-5">
        <Button variant="secondary" className="button__main" >View more</Button>
        </Container>
    )
}