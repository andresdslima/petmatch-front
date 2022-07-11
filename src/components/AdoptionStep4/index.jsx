import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';
import { createAdoption } from '../../services/mainAPI/adoption';
import { api } from '../../services/mainAPI/config';
import { updateUser } from '../../services/mainAPI/users';

const validationSchema = Yup.object({
	assinatura: Yup.string().min(6, 'Assinatura registrada').required('*'),
	declaracao: Yup.boolean(true).required('*'),
});

export default function AdoptionStep4({ setStep, formValues, setFormValues }) {
	const data = JSON.parse(localStorage.getItem('data'));
	const user = JSON.parse(localStorage.getItem('user'));
	const petId = parseInt(window.location.search.split('?')[1]);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			assinatura: '',
		},

		validationSchema,

		onSubmit: async () => {
			setFormValues({
				...formValues,
			});

			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${data.payload.accessToken}`;

			api.defaults.headers.common['Content-Type'] = `application/json`;

			setStep(5);
			dispatch(countStep({ step: 5 }));
			localStorage.removeItem('form');
			localStorage.removeItem('user');

			await createAdoption(petId);
			await updateUser(data.payload.id, user);
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Styled.SDiv>
					<span>
						Ao adotar o animal descrito declaro-me apto para assumir a guarda e
						a responsabilidade sobre este animal, eximindo o doador de toda e
						qualquer responsabilidade por quaisquer atos praticados pelo animal
						a partir desta data. Declaro ainda estar ciente de todos os cuidados
						que este animal exige no que se refere à sua guarda e manutenção,
						além de conhecer todos os riscos inerentes à espécie no convívio com
						humanos, estando apto a guardá-lo e vigiá-lo, comprometendo-me a
						proporcionar boas condições de alojamento e alimentação, assim como,
						espaço físico que possibilite o animal se exercitar.
						<br />
						Responsabilizo-me por preservar a saúde e integridade do animal e a
						submetê-lo aos cuidados médico veterinários sempre que necessário
						para este fim. Comprometo-me a não transmitir a posse deste animal a
						outrem sem o conhecimento do doador. Comprometo-me também, a
						permitir o acesso do doador ao local onde se encontra o animal para
						averiguação de suas condições. Tenho conhecimento de que caso seja
						constatado por parte do doador situação inadequada para o bem estar
						do animal, perderei a sua guarda, sem prejuízo das penalidades
						legais. Comprometo-me ainda em{' '}
						<strong>ESTERILIZAR (castrar)</strong> o animal adotado, se o doador
						já não o tiver feito, contribuindo assim para o controle da
						população de animais domésticos.
						<br />
						Comprometo-me a cumprir toda a legislação vigente, municipal,
						estadual e federal, relativa à posse de animais. Declaro-me assim,
						ciente das normas acima, as quais aceito, assinando o presente Termo
						de Responsabilidade, assumindo plenamente os deveres que dele
						constam, bem como outros relacionados à posse responsável e que não
						estejam incluídos neste Termo. Abandonar ou maltratar animais é
						crime. Pena: 3 meses a 1 ano de detenção e multa{' '}
						<strong>(Lei Federal 9605/98)</strong>.
					</span>
					<Styled.InputContainer>
						<Styled.Label htmlFor="assinatura">
							Assinatura do Adotante
						</Styled.Label>
						{formik.errors.assinatura && (
							<small>
								<em>{formik.errors.assinatura}</em>
							</small>
						)}
						<Styled.SSignature
							type="text"
							name="assinatura"
							id="assinatura"
							placeholder="Assinatura ou Nome completo"
							value={formik.values.assinatura}
							onChange={formik.handleChange}
						/>
					</Styled.InputContainer>
					<Styled.CheckboxContainer>
						{formik.errors.declaracao && (
							<small>
								<em>{formik.errors.declaracao}</em>
							</small>
						)}
						<Styled.Checkbox
							type="checkbox"
							name="declaracao"
							id="declaracao"
							label="Declaro que li, estou ciente e de acordo com os termos do presente contrato."
							alt="Declaro que li, estou ciente e de acordo com os termos do presente contrato."
							value={formik.values.declaracao}
							onChange={formik.handleChange}
						/>
					</Styled.CheckboxContainer>
					<small>
						<em>*Seus dados cadastrais serão atualizados automaticamente.</em>
					</small>
				</Styled.SDiv>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton
					variant="primary"
					type="button"
					onClick={() => {
						setStep(3);
						dispatch(countStep({ step: 3 }));
					}}
				>
					Voltar
				</Styled.SButton>
				<Styled.SButton variant="primary" type="submit">
					Enviar formulário
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
