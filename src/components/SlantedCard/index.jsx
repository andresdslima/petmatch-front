import { Container, Card } from 'react-bootstrap';
import WhiteDog from '../../assets/images/WhiteDog.svg';
import Woman3 from '../../assets/images/Woman3.svg';
import * as S from './styled.js';

const SlantedCard = () => {
  return (
    <S.CardContainer className="mb-5">
      <S.RectangleBackground>
        <S.CardCenter>
          <S.CardImage variant="top" src={WhiteDog} />
          <S.CardTextContainer>
            <S.Title>Formulário enviado com sucesso!</S.Title>
            <S.Text>Agora é so aguardar o nosso retorno!</S.Text>
          </S.CardTextContainer>
        </S.CardCenter>
      </S.RectangleBackground>
    </S.CardContainer>
  );
};

export default SlantedCard;
