import { Button, Card } from "react-bootstrap"
import PostImage from "../../../assets/images/DogPostCard.svg"
import './styles.css'

const CardPosts = () => {
    return (
        <Card className="cardPost" >
            <Card.Img variant="top" src={PostImage} />
            <Card.Body>
                <Card.Title className="postTitle">SOBRE PETS</Card.Title>
                <Card.Text className='cardText'>
                    O abandono dos pets está cada vez mais sendo visto de forma comum e isso está se tornando um problema cada vez mais [...]
                </Card.Text>
            </Card.Body>
            <Button className="buttonPost">
                <span>Leia mais</span>
                <span>+</span>
            </Button>
        </Card>
    )
}

export default CardPosts