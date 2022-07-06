import Dog from '../../assets/images/DogVector.svg';
import Cat from '../../assets/images/CatVector.svg';
import { useLocation } from 'react-router-dom';
import * as S from './styled';

const Footer = () => {
	const location = useLocation();
	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<S.FooterBackground expand="lg" className="p-0">
			<S.FooterContainer>
				<div>
					<S.VetorImage src={Dog} alt="PetMatch Logo" />
				</div>
				<S.FooterCenterContainer>
					<S.NavLinks>
						<S.ButtonLink active={location.pathname} exact to="/">
							Voltar ao topo
						</S.ButtonLink>
						<S.ButtonLink active={location.pathname} exact to="/ongs">
							ONG's
						</S.ButtonLink>
						<S.ButtonLink active={location.pathname} exact to="/sobre">
							Sobre
						</S.ButtonLink>
					</S.NavLinks>
					<S.Text>"Os animais nos ensinam o valor da vida."</S.Text>
				</S.FooterCenterContainer>
				<div>
					<S.VetorImage src={Cat} alt="PetMatch Logo" />
				</div>
			</S.FooterContainer>
		</S.FooterBackground>
	);
};

export default Footer;
