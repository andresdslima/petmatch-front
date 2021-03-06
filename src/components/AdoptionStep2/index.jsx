import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Col, Row } from 'react-bootstrap';
import { countStep } from '../../store/modules/adoption';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = Yup.object({
	cpf: Yup.string().min(11, '11 dígitos').required('*'),
	rg: Yup.string().min(9, '9 dígitos').required('*'),
	estadoCivil: Yup.string().required('*'),
	profissao: Yup.string().required('*'),
	bairro: Yup.string().min(3, 'Nome do bairro').required('*'),
});

export default function AdoptionStep2({ setStep, formValues, setFormValues }) {
	const { register } = useForm();
	const dispatch = useDispatch();
	const formObject = JSON.parse(localStorage.getItem('form'));
	const userItem = useSelector(state => state.persistedReducer.user);

	const formik = useFormik({
		initialValues: {
			cpf: `${userItem.cpf ?? ''}`,
			rg: `${formObject.rg ?? ''}`,
			estadoCivil: formObject.estadoCivil ?? '',
			profissao: formObject.profissao ?? '',
			bairro: userItem.bairro ?? '',
			complemento: userItem.complemento ? userItem.complemento : null,
		},

		validationSchema,

		onSubmit: values => {
			const currentForm = Object.assign(formObject, {
				cpf: `${values.cpf}`,
				rg: `${values.rg}`,
				estadoCivil: values.estadoCivil,
				profissao: values.profissao,
				bairro: values.bairro,
				complemento: values.complemento ? values.complemento : null,
			});

			setFormValues({
				...formValues,
				...values,
			});

			setStep(3);
			dispatch(countStep({ step: 3 }));

			localStorage.setItem('form', JSON.stringify(currentForm));
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="cpf">CPF</Styled.Label>
							{formik.errors.cpf && (
								<small>
									<em>{formik.errors.cpf}</em>
								</small>
							)}
							<Styled.SInput
								type="number"
								name="cpf"
								id="cpf"
								placeholder="12345678901"
								{...register('cpf')}
								value={formik.values.cpf}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="rg">RG</Styled.Label>
							{formik.errors.rg && (
								<small>
									<em>{formik.errors.rg}</em>
								</small>
							)}
							<Styled.SInput
								type="number"
								name="rg"
								id="rg"
								placeholder="001234567"
								{...register('rg')}
								value={formik.values.rg}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="estadoCivil">Estado Civil</Styled.Label>
							{formik.errors.estadoCivil && (
								<small>
									<em>{formik.errors.estadoCivil}</em>
								</small>
							)}
							<Styled.FormItemSelect
								id="estadoCivil"
								type="select"
								placeholder="estadoCivil"
								name="estadoCivil"
								{...register('estadoCivil')}
								value={formik.values.estadoCivil}
								onChange={formik.handleChange}
							>
								<Styled.SelectOption value=""></Styled.SelectOption>
								<Styled.SelectOption value="Solteiro(a)">
									Solteiro(a)
								</Styled.SelectOption>
								<Styled.SelectOption value="Casado(a)">
									Casado(a)
								</Styled.SelectOption>
								<Styled.SelectOption value="Viúvo(a)">
									Divorciado(a)
								</Styled.SelectOption>
								<Styled.SelectOption value="Viúvo(a)">
									Viúvo(a)
								</Styled.SelectOption>
							</Styled.FormItemSelect>
						</Styled.InputContainer>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="profissao">Profissão</Styled.Label>
							{formik.errors.profissao && (
								<small>
									<em>{formik.errors.profissao}</em>
								</small>
							)}
							<Styled.SInput
								type="text"
								name="profissao"
								id="profissao"
								placeholder="Sua profissão"
								{...register('profissao')}
								value={formik.values.profissao}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="bairro">Bairro</Styled.Label>
							{formik.errors.bairro && (
								<small>
									<em>{formik.errors.bairro}</em>
								</small>
							)}
							<Styled.SInput
								type="text"
								name="bairro"
								id="bairro"
								placeholder="Seu bairro"
								{...register('bairro')}
								value={formik.values.bairro}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="complemento">Complemento</Styled.Label>
							<Styled.SInput
								type="text"
								name="complemento"
								{...register('complemento')}
								id="complemento"
								placeholder="Opcional"
								value={formik.values.complemento}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>
				</Row>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton
					variant="primary"
					type="button"
					onClick={() => {
						setStep(1);
						dispatch(countStep({ step: 1 }));
					}}
				>
					Voltar
				</Styled.SButton>
				<Styled.SButton variant="primary" type="submit">
					Continuar
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
