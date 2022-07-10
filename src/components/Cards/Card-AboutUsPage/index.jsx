import * as S from './styled'

const AboutUsCards = ({ imageName }) => {
    return (
        <S.CardGroup>
            <S.CardGroupImage src={imageName} alt="Imagem integrante" />
        </S.CardGroup>
    )
}

export default AboutUsCards