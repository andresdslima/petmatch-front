import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import * as S from './styled';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/users';

const Header = () => {
	// const isLogged = useSelector(state => state.persistedReducer.isLogged);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
		dispatch(signOut());
		navigate('/');
	};

	return (
		<Navbar expand="lg mb-4">
			<Container>
				<Navbar.Brand className="m-0 py-3">
					<Link exact to="/">
					<S.LogoImage src={Logo} alt="PetMatch Logo"/>
					</Link>
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
								<S.SigninIcon></S.SigninIcon>
								<S.SigninText>Entrar</S.SigninText>
							</S.NavSignin>
						) : (
							<S.NavUser active={location.pathname} exact to="#">
								<S.UserIcon />
								<S.UserName>{firstName()}</S.UserName>
								<S.ButtonSignOut onClick={logout}>
									<S.SignOut className="sign-out"></S.SignOut>
								</S.ButtonSignOut>
							</S.NavUser>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
