import { Row, Col } from 'react-bootstrap'
import CardMatchs from '../Cards/Card-Matchs'

const MatchMainContent = () => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            {/*Os cards serão importados via chamada API */}
            {Array.from({ length: 5 }).map((test) => (
                <Col>
                    <CardMatchs />
                </Col>
            ))}

        </Row>
    )
}

export default MatchMainContent