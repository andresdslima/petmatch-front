import WhiteDog from '../../assets/images/WhiteDog.svg';
import * as S from './styled.js';
import * as Styled from '../AdoptionForm/styled';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';

const AdoptionStep5 = ({ setStep, formValues, setFormValues }) => {
	const dispatch = useDispatch();

	return (
		<>
			<S.CardContainer>
				<S.RectangleBackground>
					<S.CardCenter className="text-center shadow">
						<S.ImageContainer>
							<S.CardImageDog variant="top" src={WhiteDog} />
						</S.ImageContainer>
						<S.CardTextContainer>
							<S.Title>Formulário enviado com sucesso!</S.Title>
							<S.Text>Agora é so aguardar o nosso retorno!</S.Text>
						</S.CardTextContainer>
					</S.CardCenter>
				</S.RectangleBackground>
			</S.CardContainer>

			<Styled.ButtonContainer className="my-5">
				<a href="/">
					<Styled.SButton
						variant="primary"
						type='submit'
						onClick={() => {
							setStep(1);
							dispatch(countStep({ step: 1 }));
						}}
					>
						Página Inicial
					</Styled.SButton>
				</a>
			</Styled.ButtonContainer>
		</>
	);
};

export default AdoptionStep5;
