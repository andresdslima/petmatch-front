import React from 'react';
import * as Styled from '../RegistrationForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logos/Logo-teste-2.svg';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const validationSchema = Yup.object({
	cellphone: Yup.string()
		.min(11, '11  dígitos')
		.max(11, '11  dígitos')
		.required('*'),
	city: Yup.string().required('*'),
	state: Yup.string().min(2, '2 letras').max(2, '2 letras').required('*'),
	cep: Yup.string().min(8, '8  dígitos').max(8, '8  dígitos').required('*'),
});

export default function RegistrationStep2({
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

		setStep(3);
	}

	const formik = useFormik({
		initialValues: {
			cellphone: '',
			city: '',
			state: '',
			cep: '',
		},

		validationSchema,
	});

	return (
		<Styled.SForm onSubmit={handleSubmit(onSubmit)}>
			<img src={logo} alt="Logo da PetMatch" />

			<Form.Label htmlFor="cellphone">Contato</Form.Label>
			{formik.errors.cellphone && <small>{formik.errors.cellphone}</small>}
			<Styled.SInput
				type="text"
				ref={register}
				name="cellphone"
				id="cellphone"
				placeholder="Ex: 11912345678"
				value={formik.values.cellphone}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="city">Cidade</Form.Label>
			{formik.errors.city && <small>{formik.errors.city}</small>}
			<Styled.SInput
				type="city"
				ref={register}
				name="city"
				id="city"
				placeholder="Ex: Natal"
				value={formik.values.city}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="state">Estado</Form.Label>
			{formik.errors.state && <small>{formik.errors.state}</small>}
			<Styled.SInput
				type="state"
				ref={register}
				placeholder="Ex: RN"
				name="state"
				id="state"
				value={formik.values.state}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="cep">CEP</Form.Label>
			{formik.errors.cep && <small>{formik.errors.cep}</small>}
			<Styled.SInput
				type="cep"
				ref={register}
				placeholder="Ex: 59093100"
				name="cep"
				id="cep"
				value={formik.values.cep}
				onChange={formik.handleChange}
			/>

			<Styled.SButton type="submit">Continuar</Styled.SButton>
			<Styled.SButton type="button">Voltar</Styled.SButton>
		</Styled.SForm>
	);
}
