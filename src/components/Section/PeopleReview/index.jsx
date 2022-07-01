import './styles.css'


import Person1 from '../../../assets/images/person1.svg'
import Person2 from '../../../assets/images/person2.svg'

import StarIcon from '../../../assets/images/starIcon.svg'

const PeopleReview = () => {
    return (
        <div className='peopleReviewDiv'>
            <div className="peopleReview container">
                <div className="talkingAbout">
                    <h6>O que estão falando sobre <br /> a Pet Match?</h6>
                    <p>Queremos ouvir sua opinião! conte pra gente como foi sua experiência e o resultado dela.</p>
                </div>
                <div className="peopleOpinionContainer">
                    <div className='peopleOpinion'>
                        <div className='personPicture'>
                            <img src={Person1} alt="Imagem Pessoa" className='picture' />
                        </div>
                        <div className='opinionContent'>
                            <div className='personInfo'>
                                <div className='nameStatement'>
                                    <h6 className='personName'>Roseane A.</h6>
                                    <p className='statement'>Tutora da Savana</p>
                                </div>
                                <div className='starsReview'>
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                </div>
                            </div>
                            <div className='statement'>
                                <p>Adotar a savana foi a melhor decisão da minha vida! Não me vejo mais sem ela, Agradeço muito por todo processo com a PetMatch.</p>
                            </div>
                        </div>
                    </div>
                    <div className='peopleOpinion'>
                        <div className='personPicture'>
                            <img src={Person2} alt="Imagem Pessoa" className='picture' />
                        </div>
                        <div className='opinionContent'>
                            <div className='personInfo'>
                                <div className='nameStatement'>
                                    <h6 className='personName'>Rogério S.</h6>
                                    <p className='statement'>Tutor do Pluto</p>
                                </div>
                                <div className='starsReview'>
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                    <img src={StarIcon} alt="Icone estrela" />
                                </div>
                            </div>
                            <div className='statement'>
                                <p>Pessoas, a PetMatch me fez ganhar meu melhor amigo, o Pluto é demais. Tudo foi muito rápido e prático. Obrigado PetMatch!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleReview