import AboutUsCards from "../Cards/Card-AboutUsPage"
import Image1 from "../../assets/images/fredericIcon.png"
import Image2 from "../../assets/images/ramonIcon.png"
import Image3 from "../../assets/images/andreIcon.png"
import Image4 from "../../assets/images/marceloIcon.png"
import Image5 from '../../assets/images/guilhermeIcon.png'
import Image6 from '../../assets/images/eduardoIcon.png'
import Image7 from '../../assets/images/felipeIcon.png'
import Image8 from '../../assets/images/giovannaIcon.png'
import Image9 from '../../assets/images/viniciusIcon.png'
import Image10 from '../../assets/images/thaisIcon.png'
import Image11 from '../../assets/images/victorIcon.png'
import Image12 from '../../assets/images/joaoIcon.png'

import { Row, Col } from 'react-bootstrap'
import './styles.css'

const AboutUsPageMainContent = () => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} id='grid' className="container-fluid">
            <Col>
                <AboutUsCards imageName={Image1} />
            </Col>

            <Col>
                <AboutUsCards imageName={Image2} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image3} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image4} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image5} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image6} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image7} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image8} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image9} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image10} />
            </Col>
            <Col>
                <AboutUsCards imageName={Image11} />
            </Col>

            <Col>
                <AboutUsCards imageName={Image12} />
            </Col>
        </Row >
    )
}

export default AboutUsPageMainContent