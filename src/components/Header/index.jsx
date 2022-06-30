import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import Signin from '../../assets/images/SiginVector.png';
import * as S from './styled';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLogged = useSelector(state => state.usersSlice.isLogged);
  const location = useLocation();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="m-0 py-3">
          <S.LogoImage src={Logo} alt="PetMatch Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <S.NavLinks>
            <S.ButtonLink active={location.pathname} to="/">
              Home
            </S.ButtonLink>
            <S.ButtonLink active={location.pathname} to="/blogs">
              Blog
            </S.ButtonLink>
            <S.ButtonLink active={location.pathname} to="/ongs">
              ONG's
            </S.ButtonLink>
            <S.ButtonLink active={location.pathname} to="/sobre">
              Sobre
            </S.ButtonLink>
          </S.NavLinks>
          <Nav>
            {!isLogged ? (
              <S.NavSignin active={location.pathname} to="/login">
                <S.SigninIcon src={Signin} alt="Sign in" />
                <S.SigninText>Entrar</S.SigninText>
              </S.NavSignin>
            ) : (
              <S.NavUser active={location.pathname} to="#">
                <S.UserIcon />
                <S.UserName>Julia Souza</S.UserName>
                <S.PlusSign>&#43;</S.PlusSign>
              </S.NavUser>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
