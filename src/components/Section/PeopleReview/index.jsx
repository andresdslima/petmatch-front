// import './styles.css'
import Person1 from '../../../assets/images/person1.svg'
import Person2 from '../../../assets/images/person2.svg'
import StarIcon from '../../../assets/images/starIcon.svg'
import * as S from './styled'

const PeopleReview = () => {
    return (
        <S.PeopleReviewDiv>
            <S.PeopleReview>
                <S.TalkingAbout>
                    <S.TalkingAboutTitle>O que estão falando sobre a PetMatch?</S.TalkingAboutTitle>
                    <S.TalkingAboutText>Queremos ouvir sua opinião! conte pra gente como foi sua experiência e o resultado dela.</S.TalkingAboutText>
                </S.TalkingAbout>
                <S.PeopleOpinionContainer>
                    <S.PeopleOpinion>
                        <div>
                            <S.Picture src={Person1} alt="Imagem Pessoa" />
                        </div>
                        <div>
                            <S.PersonInfo>
                                <S.NameStatement>
                                    <S.PersonName>Roseane A.</S.PersonName>
                                    <S.Statement>Tutora da Savana</S.Statement>
                                </S.NameStatement>
                                <div className='starsReview'>
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                </div>
                            </S.PersonInfo>
                            <S.Statement>
                                <p>Adotar a savana foi a melhor decisão da minha vida! Não me vejo mais sem ela, Agradeço muito por todo processo com a PetMatch.</p>
                            </S.Statement>
                        </div>
                    </S.PeopleOpinion>
                    <S.PeopleOpinion>
                        <div className='personPicture'>
                            <S.Picture src={Person2} alt="Imagem Pessoa" />
                        </div>
                        <div className='opinionContent'>
                            <S.PersonInfo>
                                <S.NameStatement>
                                    <S.PersonName>Rogério S.</S.PersonName>
                                    <S.Statement className='statement'>Tutor do Pluto</S.Statement>
                                </S.NameStatement>
                                <div className='starsReview'>
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                </div>
                            </S.PersonInfo>
                            <S.Statement>
                                <p>Pessoas, a PetMatch me fez ganhar meu melhor amigo, o Pluto é demais. Tudo foi muito rápido e prático. Obrigado PetMatch!</p>
                            </S.Statement>
                        </div>
                    </S.PeopleOpinion>
                </S.PeopleOpinionContainer>
            </S.PeopleReview>
        </S.PeopleReviewDiv>
    )
}

export default PeopleReview