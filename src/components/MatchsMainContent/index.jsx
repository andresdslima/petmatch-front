import { Row, Col } from 'react-bootstrap'
import CardMatches from '../Cards/CardMatches'
import './styles.css'

const MatchMainContent = () => {
    return (
        <div className='container mb-5'>
            <Row xs={2} sm={2} md={3} lg={4} xl={5}>
                {/*Os cards serão importados via chamada API */}
                {Array.from({ length: 5 }).map((test) => (
                    <Col className='d-flex justify-content-center g-4'>
                        <CardMatches />
                    </Col>
                ))}

            </Row>
        </div>
    )
}

export default MatchMainContent