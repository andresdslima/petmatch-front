import Woman3 from '../../assets/images/Woman3.svg';
import * as S from './styled.js';

const SlantedCard = () => {
	return (
		<S.CardContainer>
			<S.RectangleBackground>
				<S.CardCenter className="text-center shadow">
					<S.ImageContainer>
						<S.CardImageWoman variant="top" src={Woman3} />
					</S.ImageContainer>
					<S.CardTextContainer>
						<S.Title>Parabéns pela sua adoção!</S.Title>
						<S.Text>
							Nós da PetMatch ficamos muito realizados quando uma adoção é
							realizada! Gostaríamos de agradecer por nos escolher e desejamos
							toda a felicidade do mundo para você e seu novo pet!
						</S.Text>
					</S.CardTextContainer>
				</S.CardCenter>
			</S.RectangleBackground>
		</S.CardContainer>
	);
};

export default SlantedCard;
