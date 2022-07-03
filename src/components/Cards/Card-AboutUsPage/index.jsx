import './styles.css'

const AboutUsCards = ({ imageName }) => {
    return (
        <div className="cardGroup">
            <img src={imageName} alt="Imagem integrante" />
        </div>
    )
}

export default AboutUsCards