import Dog from '../../assets/images/DogVector.svg';
import Cat from '../../assets/images/CatVector.svg';
import { useLocation, Link } from 'react-router-dom';
import * as S from './styled';
import LogoFooter from '../../assets/images/LogoFooter.svg';

const Footer = () => {
	const location = useLocation();

	const backToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<>
			<S.FooterLogoContainer>
				<Link exact to="/">
					<img src={LogoFooter} alt="Footer Logo" />
				</Link>
			</S.FooterLogoContainer>
			<S.FooterBackground expand="lg" className="p-0">
				<S.FooterContainer>
					<div>
						<S.VetorImage src={Dog} alt="PetMatch Logo" />
					</div>
					<S.FooterCenterContainer>
						<S.BoldText>Política de privacidade</S.BoldText>
						<S.BoldText>Contato: contato@petmatch.com</S.BoldText>
						<S.Text>
							"Os olhos de um animal têm o poder de falar mais do que uma grande
							linguagem"
						</S.Text>
						<S.NavLinks>
							<S.SButton onClick={backToTop}>Voltar ao topo</S.SButton>
							<S.ButtonLink active={location.pathname} exact to="/ongs">
								ONG's
							</S.ButtonLink>
							<S.ButtonLink active={location.pathname} exact to="/sobre">
								Sobre
							</S.ButtonLink>
						</S.NavLinks>
					</S.FooterCenterContainer>
					<div>
						<S.VetorImage src={Cat} alt="PetMatch Logo" />
					</div>
				</S.FooterContainer>
			</S.FooterBackground>
		</>
	);
};

export default Footer;
