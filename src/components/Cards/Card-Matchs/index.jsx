
import './styles.css'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CardImage from '../../../assets/images/godofredo.svg'
import MatchIcon from '../../../assets/images/matchIcon.png'
import HeartIcon from '../../../assets/images/heartIcon.png'

const CardMatchs = () => {
    return (
        <Card className='cardContainer'>
            <Card.Img variant="top" src={CardImage} className='cardImg' />
            <Card.Body>
                <Card.Title className='cardTitle'>Godofredo</Card.Title>
                <Card.Text className='cardText'>
                    Multiverso dos pugs - PR
                </Card.Text>
            </Card.Body>
            <div className='matchIconContainer'>
                <img src={MatchIcon} alt="Icone de Match" className='matchIcon' />
                <img src={HeartIcon} alt="Icone coracao" className='heartIcon' />
                <span className='matchPercent'>99%</span>
            </div>
        </Card>
    )
}

export default CardMatchs