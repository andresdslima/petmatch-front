import CardPosts from "../../components/Cards/Card-Posts"
import { Row, Col } from 'react-bootstrap'

import DogPostImage from '../../assets/images/dogPostCard.svg'
import PeacockPostImage from '../../assets/images/peacockPostCard.svg'

const CardPostsContainer = () => {
    return (
        <div className="container">
            <Row xs={1} sm={1} md={2} lg={2}>
                <Col>
                    <CardPosts imageName={DogPostImage}></CardPosts>
                </Col>
                <Col>
                    <CardPosts imageName={PeacockPostImage}></CardPosts>
                </Col>
            </Row>
        </div>
    )
}

export default CardPostsContainer