import AboutUsBanner from '../../../assets/images/aboutUsBanner.svg'
import { Card } from 'react-bootstrap'

import * as S from './styled';

const AboutBanner = () => {
    return (
        <S.CardBanner className='container'>
            <Card.Img variant='top' src={AboutUsBanner} />
        </S.CardBanner>
    )
}

export default AboutBanner