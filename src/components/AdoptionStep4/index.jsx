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
	const petId = parseInt(window.location.search.split('?')[1]);
	const data = JSON.parse(localStorage.getItem('data'));
	const dispatch = useDispatch();

	const {
		bairro,
		cep,
		cidade,
		contato,
		cpf,
		logradouro,
		numero_logradouro,
		uf,
	} = JSON.parse(localStorage.getItem('form'));

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

			await createAdoption(petId);
			await updateUser(data.payload.id, {
				bairro,
				cep,
				cidade,
				contato,
				cpf,
				logradouro,
				numero_logradouro,
				uf,
			});
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
						que este animal exige no que se refere ?? sua guarda e manuten????o,
						al??m de conhecer todos os riscos inerentes ?? esp??cie no conv??vio com
						humanos, estando apto a guard??-lo e vigi??-lo, comprometendo-me a
						proporcionar boas condi????es de alojamento e alimenta????o, assim como,
						espa??o f??sico que possibilite o animal se exercitar.
						<br />
						Responsabilizo-me por preservar a sa??de e integridade do animal e a
						submet??-lo aos cuidados m??dico veterin??rios sempre que necess??rio
						para este fim. Comprometo-me a n??o transmitir a posse deste animal a
						outrem sem o conhecimento do doador. Comprometo-me tamb??m, a
						permitir o acesso do doador ao local onde se encontra o animal para
						averigua????o de suas condi????es. Tenho conhecimento de que caso seja
						constatado por parte do doador situa????o inadequada para o bem estar
						do animal, perderei a sua guarda, sem preju??zo das penalidades
						legais. Comprometo-me ainda em{' '}
						<strong>ESTERILIZAR (castrar)</strong> o animal adotado, se o doador
						j?? n??o o tiver feito, contribuindo assim para o controle da
						popula????o de animais dom??sticos.
						<br />
						Comprometo-me a cumprir toda a legisla????o vigente, municipal,
						estadual e federal, relativa ?? posse de animais. Declaro-me assim,
						ciente das normas acima, as quais aceito, assinando o presente Termo
						de Responsabilidade, assumindo plenamente os deveres que dele
						constam, bem como outros relacionados ?? posse respons??vel e que n??o
						estejam inclu??dos neste Termo. Abandonar ou maltratar animais ??
						crime. Pena: 3 meses a 1 ano de deten????o e multa{' '}
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
						<em>*Seus dados cadastrais ser??o atualizados automaticamente.</em>
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
					Enviar formul??rio
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
