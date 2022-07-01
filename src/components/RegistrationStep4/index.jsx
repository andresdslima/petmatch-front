import React from 'react';
import * as Styled from '../RegistrationForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logos/Logo-teste-2.svg';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { createUser } from '../../services/mainAPI/users';

const validationSchema = Yup.object({
	rg: Yup.string().min(9, '9  dígitos').max(9, '9  dígitos').required('*'),
	maritalStatus: Yup.string().required('*'),
	profession: Yup.string().required('*'),
});

export default function RegistrationStep3({
	setStep,
	formValues,
	setFormValues,
}) {
	const { register, errors, handleSubmit } = useForm();

	async function onSubmit(values) {
		setFormValues({
			...formValues,
			...values,
		});

		const response = await createUser({
			...formValues,
			...values,
		});

		if (response.status === 200) {
			console.log('Success', response.data);
		}
	}

	const formik = useFormik({
		initialValues: {
			rg: '',
			maritalStatus: '',
			profession: '',
		},

		validationSchema,
	});

	return (
		<Styled.SForm onSubmit={handleSubmit(onSubmit)}>
			<img src={logo} alt="Logo da PetMatch" />

			<Form.Label htmlFor="rg">RG</Form.Label>
			{formik.errors.rg && <small>{formik.errors.rg}</small>}
			<Styled.SInput
				type="text"
				ref={register}
				name="rg"
				id="rg"
				placeholder="Ex: 001234567"
				value={formik.values.rg}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="maritalStatus">Estado Civil</Form.Label>
			{formik.errors.maritalStatus && (
				<small>{formik.errors.maritalStatus}</small>
			)}
			<Styled.SInput
				type="text"
				ref={register}
				name="maritalStatus"
				id="maritalStatus"
				placeholder="Ex: Solteiro(a)"
				value={formik.values.maritalStatus}
				onChange={formik.handleChange}
			/>

			<Form.Label htmlFor="profession">Profissão</Form.Label>
			{formik.errors.profession && <small>{formik.errors.profession}</small>}
			<Styled.SInput
				type="text"
				ref={register}
				placeholder="Ex: Professor(a)"
				name="profession"
				id="profession"
				value={formik.values.profession}
				onChange={formik.handleChange}
			/>

			<Styled.SButton type="submit">Cadastrar-se</Styled.SButton>
			<Styled.SButton type="button">Voltar</Styled.SButton>
		</Styled.SForm>
	);
}
