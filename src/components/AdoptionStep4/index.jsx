import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';
import { createAdoption } from '../../services/mainAPI/adoption';
import { api } from '../../services/mainAPI/config';

const validationSchema = Yup.object({
	assinatura: Yup.string().min(6, 'Assinatura registrada').required('*'),
	declaracao: Yup.boolean().required('*'),
});

export default function AdoptionStep4({ setStep, formValues, setFormValues }) {
	const formObject = JSON.parse(localStorage.getItem('form'));
	const data = JSON.parse(localStorage.getItem('data'));
	const { register } = useForm();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			assinatura: '',
		},

		validationSchema,

		onSubmit: async values => {
			setFormValues({
				...formValues,
				...values,
			});

			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${data.payload.accessToken}`;

			setStep(5);
			dispatch(countStep({ step: 5 }));

			const currentForm = Object.assign(formObject, { ...values });
			localStorage.setItem('form', JSON.stringify(currentForm));

			await createAdoption(values);
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
						legais.
						<br />
						Comprometo-me ainda em <strong>ESTERILIZAR (castrar)</strong> o
						animal adotado , se o doador já não o tiver feito, contribuindo
						assim para o controle da população de animais domésticos.
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
							<small>{formik.errors.assinatura}</small>
						)}
						<Styled.SSignature
							type="text"
							name="assinatura"
							id="assinatura"
							placeholder="Assinatura ou Nome completo"
							{...register('assinatura')}
							value={formik.values.assinatura}
							onChange={formik.handleChange}
						/>
					</Styled.InputContainer>
					<Styled.CheckboxContainer>
						{formik.errors.declaracao && (
							<small>{formik.errors.declaracao}</small>
						)}
						<Styled.Checkbox
							type="checkbox"
							name="declaracao"
							id="declaracao"
							label="Declaro que li, estou ciente e de acordo com os termos do presente contrato."
							alt="Declaro que li, estou ciente e de acordo com os termos do presente contrato."
							{...register('declaracao')}
							value={formik.values.declaracao}
							onChange={formik.handleChange}
						/>
					</Styled.CheckboxContainer>
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
