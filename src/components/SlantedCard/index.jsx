import { Container, Card } from 'react-bootstrap';
import WhiteDog from '../../assets/images/WhiteDog.svg';
import Woman3 from '../../assets/images/Woman3.svg';
import * as S from './styled.js';
import { useLocation } from 'react-router-dom';

const SlantedCard = () => {

  const location = useLocation();
	return (
		<S.CardContainer>
			<S.RectangleBackground>
				<S.CardCenter className="text-center">
          {location.pathname == "/formularioenviado"? (<><S.ImageContainer>
            <S.CardImageDog variant="top" src={WhiteDog} />
          </S.ImageContainer><S.CardTextContainer>
              <S.Title>Formulário enviado com sucesso!</S.Title>
              <S.Text>Agora é so aguardar o nosso retorno!</S.Text>
            </S.CardTextContainer></>): (<><S.ImageContainer>
              <S.CardImageWoman variant="top" src={Woman3} />
            </S.ImageContainer><S.CardTextContainer>
                <S.Title>Parabéns pela sua adoção!</S.Title>
                <S.Text>
                  Nós da PetMatch ficamos realizados quado uma adoção é realizada,
                  queríamos agradecer por nos escolher e desejamos toda felicidade
                  do mundo para você e seu novo pet!
                </S.Text>
              </S.CardTextContainer></>)
          }
				</S.CardCenter>
			</S.RectangleBackground>
		</S.CardContainer>
	);
};

export default SlantedCard;
