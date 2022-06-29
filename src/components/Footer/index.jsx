import { Navbar, Container, Nav } from 'react-bootstrap';
import Dog from '../../assets/images/DogVector.png';
import Cat from '../../assets/images/CatVector.png';
import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterBackground expand="lg"  className='p-0'>
    <S.FooterContainer>
    <div>
      <S.VetorImage src={Dog} alt="PetMatch Logo" />
    </div>
    <S.FooterCenterContainer>
      <S.NavLinks>
        <S.ButtonLink active={location.pathname} to="/">Voltar ao topo</S.ButtonLink>
        <S.ButtonLink active={location.pathname} to="/">ONG's</S.ButtonLink>
        <S.ButtonLink active={location.pathname} to="/">Sobre</S.ButtonLink>
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
