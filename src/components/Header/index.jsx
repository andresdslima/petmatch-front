import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import Signin from '../../assets/images/SigninVector.svg';
import * as S from './styled';
import { useSelector } from 'react-redux';

const Header = () => {
	// const isLogged = useSelector(state => state.persistedReducer.isLogged);
	const location = useLocation();
	const navigate = useNavigate();
	const data = JSON.parse(localStorage.getItem('data'));

	const isLogged = () => {
		if (!data) return false;

		return true;
	};

	const firstName = () => {
		if (data) return data.payload.firstName;

		return;
	};

	const logout = () => {
		localStorage.removeItem('data');
		navigate('/');
	};

	return (
		<Navbar expand="lg mb-5">
			<Container>
				<Navbar.Brand href="/" className="m-0 py-3">
					<S.LogoImage src={Logo} alt="PetMatch Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<S.NavLinks>
						<S.ButtonLink active={location.pathname} exact to="/">
							Home
						</S.ButtonLink>
						<S.ButtonLink active={location.pathname} exact to="/blog">
							Blog
						</S.ButtonLink>
						<S.ButtonLink active={location.pathname} exact to="/ongs">
							ONG's
						</S.ButtonLink>
						<S.ButtonLink active={location.pathname} exact to="/sobre">
							Sobre
						</S.ButtonLink>
					</S.NavLinks>
					<Nav>
						{!isLogged() ? (
							<S.NavSignin active={location.pathname} exact to="/login">
								<S.SigninIcon src={Signin} alt="Sign in" />
								<S.SigninText>Entrar</S.SigninText>
							</S.NavSignin>
						) : (
							<S.NavUser active={location.pathname} exact to="#">
								<S.UserIcon />
								<S.UserName>{firstName()}</S.UserName>
								<button onClick={logout}>
									<S.PlusSign>&#43;</S.PlusSign>
								</button>
							</S.NavUser>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
