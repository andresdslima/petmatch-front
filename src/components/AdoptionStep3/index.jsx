import React from 'react';
import * as Styled from '../RegistrationForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logos/Logo-teste-2.svg';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const validationSchema = Yup.object({
	address: Yup.string().required('*'),
	addressNumber: Yup.number().required('*'),
	addressComplement: Yup.string(),
	cpf: Yup.string().min(11, '11  dígitos').max(11, '11  dígitos').required('*'),
});

export default function RegistrationStep3({
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

		setStep(4);
	}

	const formik = useFormik({
		initialValues: {
			address: '',
			addressNumber: '',
			addressComplement: '',
			cpf: '',
		},

		validationSchema,
	});

	return (
		<Styled.SForm onSubmit={handleSubmit(onSubmit)}>
			<img src={logo} alt="Logo da PetMatch" />

			<Form.Label htmlFor="address">Endereço</Form.Label>
			{formik.errors.address && <small>{formik.errors.address}</small>}
			<Styled.SInput
				type="text"
				ref={register}
				name="address"
				id="address"
				placeholder="Ex: Rua dos Ladrilhos"
				value={formik.values.address}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="addressNumber">Número</Form.Label>
			{formik.errors.addressNumber && (
				<small>{formik.errors.addressNumber}</small>
			)}
			<Styled.SInput
				type="number"
				ref={register}
				name="addressNumber"
				id="addressNumber"
				placeholder="Ex: 12"
				value={formik.values.addressNumber}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="addressComplement">Complemento</Form.Label>
			{formik.errors.addressComplement && (
				<small>{formik.errors.addressComplement}</small>
			)}
			<Styled.SInput
				type="text"
				ref={register}
				placeholder="Opcional"
				name="addressComplement"
				id="addressComplement"
				value={formik.values.addressComplement}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="cpf">CPF</Form.Label>
			{formik.errors.cpf && <small>{formik.errors.cpf}</small>}
			<Styled.SInput
				type="text"
				ref={register}
				placeholder="Ex: 12345678901"
				name="cpf"
				id="cpf"
				value={formik.values.cpf}
				onChange={formik.handleChange}
			/>

			<Styled.SButton type="submit">Continuar</Styled.SButton>
			<Styled.SButton type="button">Voltar</Styled.SButton>
		</Styled.SForm>
	);
}
