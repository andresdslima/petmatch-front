import React from 'react';
import * as Styled from '../RegistrationForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logos/Logo-teste-2.svg';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const validationSchema = Yup.object({
	name: Yup.string().required('*'),
	email: Yup.string().email('Email inválido').required('*'),
	password: Yup.string().min(6, 'Mínimo 6 dígitos').required('*'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Senhas não conferem')
		.required('*'),
});

export default function RegistrationStep1({
	setStep,
	formValues,
	setFormValues,
}) {
	const { register, errors, handleSubmit } = useForm();

	function onSubmit(values) {
		setFormValues({
			...formValues,
			...values,
		});

		setStep(2);
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},

		validationSchema,
	});

	return (
		<Styled.SForm onSubmit={handleSubmit(onSubmit)}>
			<img src={logo} alt="Logo da PetMatch" />

			<Form.Label htmlFor="name">Nome completo</Form.Label>
			{formik.errors.name && <small>{formik.errors.name}</small>}
			<Styled.SInput
				type="text"
				ref={register}
				name="name"
				id="name"
				placeholder="Ex: João Maria da Silva"
				value={formik.values.name}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="email">Email</Form.Label>
			{formik.errors.email && <small>{formik.errors.email}</small>}
			<Styled.SInput
				type="email"
				ref={register}
				name="email"
				id="email"
				placeholder="Ex: nome@email.com.br"
				value={formik.values.email}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="password">Senha</Form.Label>
			{formik.errors.password && <small>{formik.errors.password}</small>}
			<Styled.SInput
				type="password"
				ref={register}
				placeholder="Digite sua senha"
				name="password"
				id="password"
				value={formik.values.password}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="password">Confirmar senha</Form.Label>
			{formik.errors.confirmPassword && (
				<small>{formik.errors.confirmPassword}</small>
			)}
			<Styled.SInput
				type="password"
				ref={register}
				placeholder="Confirme sua senha"
				name="confirmPassword"
				id="confirmPassword"
				value={formik.values.confirmPassword}
				onChange={formik.handleChange}
			/>

			<Styled.SButton type="submit">Continuar</Styled.SButton>
			<Styled.SLink to="/login">Já possuo cadastro</Styled.SLink>
		</Styled.SForm>
	);
}
