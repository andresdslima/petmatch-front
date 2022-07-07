
import { Container } from 'react-bootstrap';
import * as S from './styled';
import CaoSemDono from '../../assets/images/CaoSemDono.svg'
import Suipa from '../../assets/images/Suipa.svg'
import AmparaAnimal from '../../assets/images/AmparaAnimal.svg'
import InstitutoLuisaMel from '../../assets/images/InstitutoLuisaMel.svg'
import Puppies from '../../assets/images/Puppies.svg'


const Partners = () => {
    return (
        <Container className='my-5'>
            <S.Title className='mb-5'>Conheça alguns membros da nossa família</S.Title>
            <S.PartnerContainerLeft>
                <S.ImageDiv>
                    <S.CaoSemDonoImage src={CaoSemDono} alt="Cão sem Dono Logo" />
                </S.ImageDiv>
                <S.PartnerDescription>O Cão Sem Dono é uma ONG (Organização Não Governamental), sem fins lucrativos, e que <br/>nasceu de um grande sonho do seu atual presidente: tirar o maior número possível de animais <br/>das ruas, dar tratamento adequado e integrá-los a famílias que lhes deem amor, carinho e uma <br/>vida digna.</S.PartnerDescription>
            </S.PartnerContainerLeft>
            <S.PartnerContainerRight>
                <S.PartnerDescription>Com mais de 70 anos de existência, a SUIPA permanece viva, como uma entidade particular, <br/>não eutanásica, sem fins lucrativos, e de utilidade pública. Além do abrigo, a SUIPA mantém <br/>em sua sede uma Assistência Veterinária, com preços populares, para que todas as pessoas <br/>possam cuidar de seus animais de estimação.</S.PartnerDescription>
                <S.ImageDiv>
                    <S.SuipaImage src={Suipa} alt="Suipa Logo" />
                </S.ImageDiv>
            </S.PartnerContainerRight>
            <S.PartnerContainerLeft>
                <S.ImageDiv>
                    <S.AmparaAnimalImage src={AmparaAnimal} alt="Ampara Animal Logo" />
                </S.ImageDiv>
                <S.PartnerDescription>A AMPARA nasce em agosto de 2010, pela coragem de Juliana Camargo e Marcele Becker em <br/>tirar diversos animais da situação de rua. Em 5 anos de trabalho pesado, a AMPARA consegue <br/>se tornar a maior OSCIP de proteção animal do Brasil, com o maior número de animais <br/>amparados.</S.PartnerDescription>
            </S.PartnerContainerLeft>
            <S.PartnerContainerRight>
                <S.PartnerDescription>Fundado em fevereiro de 2015, o Instituto Luisa Mell atua principalmente no resgate de <br/>animais feridos ou em situação de risco, recuperação e adoção. Mantemos um abrigo com <br/>cerca de 300 animais, entre cães e gatos, todos resgatados das ruas, onde eles são <br/>protegidos, alimentados e aguardam pela chance de serem adotados.</S.PartnerDescription>
                <S.ImageDiv>
                    <S.InstitutoLuisaMelImage src={InstitutoLuisaMel} alt="Instituto Luisa Mel Logo" />
                </S.ImageDiv>
            </S.PartnerContainerRight>
            <S.PuppiesImage src={Puppies} alt="" />
        </Container>
    )
}

export default Partners;