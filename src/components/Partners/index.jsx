
import { Container } from 'react-bootstrap';
import * as S from './styled';
import CaoSemDono from '../../assets/images/CaoSemDono.svg'
import Suipa from '../../assets/images/Suipa.svg'
import AmparaAnimal from '../../assets/images/AmparaAnimal.svg'
import InstitutoLuisaMel from '../../assets/images/InstitutoLuisaMel.svg'
import Puppies from '../../assets/images/Puppies.svg'


const Partners = () => {
    return (
        <Container>
            <span>Conheça alguns membros da nossa família</span>
            <S.PartnerContainer className='d-flex justify-content-start align-items-center'>
                <S.ImageDiv>
                    <S.Image src={CaoSemDono} alt="Cão sem Dono Logo" />
                </S.ImageDiv>
                <S.PartnerDescription className='text-start'>O Cão Sem Dono é uma ONG (Organização Não Governamental), sem fins lucrativos, e que nasceu de um grande sonho do seu atual presidente: tirar o maior número possível de animais das ruas, dar tratamento adequado e integrá-los a famílias que lhes deem amor, carinho e uma vida digna.</S.PartnerDescription>
            </S.PartnerContainer>
            <S.PartnerContainer className='d-flex justify-content-end'>
                <S.PartnerDescription className='text-end'>Com mais de 70 anos de existência, a SUIPA permanece viva, como uma entidade particular, não eutanásica, sem fins lucrativos, e de utilidade pública. Além do abrigo, a SUIPA mantém em sua sede uma Assistência Veterinária, com preços populares, para que todas as pessoas possam cuidar de seus animais de estimação.</S.PartnerDescription>
                <S.ImageDiv>
                    <S.Image src={Suipa} alt="Suipa Logo" />
                </S.ImageDiv>
            </S.PartnerContainer>
            <S.PartnerContainer className='d-flex justify-content-start'>
                <S.ImageDiv>
                    <S.Image src={AmparaAnimal} alt="Ampara Animal Logo" />
                </S.ImageDiv>
                <S.PartnerDescription className='text-start'>A AMPARA nasce em agosto de 2010, pela coragem de Juliana Camargo e Marcele Becker em tirar diversos animais da situação de rua. Em 5 anos de trabalho pesado, a AMPARA consegue se tornar a maior OSCIP de proteção animal do Brasil, com o maior número de animais amparados.</S.PartnerDescription>
            </S.PartnerContainer>
            <S.PartnerContainer className='d-flex justify-content-end'>
                <S.PartnerDescription className='text-end'>Fundado em fevereiro de 2015, o Instituto Luisa Mell atua principalmente no resgate de animais feridos ou em situação de risco, recuperação e adoção. Mantemos um abrigo com cerca de 300 animais, entre cães e gatos, todos resgatados das ruas, onde eles são protegidos, alimentados e aguardam pela chance de serem adotados.</S.PartnerDescription>
                <S.ImageDiv>
                    <S.Image src={InstitutoLuisaMel} alt="Cão sem Dono Logo" />
                </S.ImageDiv>
            </S.PartnerContainer>
            <img src={Puppies} alt="" />
        </Container>
    )
}

export default Partners;