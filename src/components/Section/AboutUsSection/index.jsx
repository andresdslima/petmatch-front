import * as S from './styled';

const AboutUsSection = () => {
    return (
        <S.MainContainer>
            <S.HowItWorks>
                <S.Titles>Como funciona a PetMatch?</S.Titles>
                <S.Paragraphs>A PetMatch tem o intuito de conectar uma pessoa adotando um pet com outra pessoa que queira doar, todo esse processo de maneira rápida, segura e muito assertiva, relacionando o pet através do nosso “match” inteligente, vinculando caracteristicas de ambos, contribuindo assim, para uma adoção mais assertiva.</S.Paragraphs>
            </S.HowItWorks>
            <S.HowItWorks>
                <S.Titles>Como posso ajudar a PetMatch?</S.Titles>
                <S.Paragraphs>A PetMatch entende que, quando você adota um pet conosco, está ajudando e muito no nosso objetivo, caso você não tenha interesse em adotar, existe nossas ONGs parceiras, que constantemente trabalham para tornar a vida dos nossos pets melhor, enquanto esperam um adoção perfeita. Ajudar essas ONGs é ajudar a PetMatch! </S.Paragraphs>
            </S.HowItWorks>
        </S.MainContainer>
    )
}

export default AboutUsSection