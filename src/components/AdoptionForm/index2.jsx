import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import dog from '../../assets/images/dog-login.png';
import footprints from '../../assets/watermarks/patas.jpg';
import * as Styled from '../RegistrationForm/styled';
import * as Yup from 'yup';
import { useFormik, useFormikContext } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../services/mainAPI/users';
import AdoptionStep1 from '../AdoptionStep1';
import AdoptionStep2 from '../AdoptionStep2';
import AdoptionStep3 from '../AdoptionStep3';
import AdoptionStep4 from '../AdoptionStep4';
// import { signIn } from '../../store/users';

const validationSchema = Yup.object({
	name: Yup.string().required('*'),
	email: Yup.string().email('Email inválido').required('*'),
	password: Yup.string().min(6, 'Mínimo 6 dígitos').required('*'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Senhas não conferem')
		.required('*'),
	houseNumber: Yup.number().required('*'),
});

export default function AdoptionForm() {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const { register, errors, handleSubmit } = useForm();
	const [step, setStep] = useState(4);
	const [formValues, setFormValues] = useState({});
	// useFormikContext()
	// useContext()

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			houseNumber: undefined,
			// permission: 1,
			// userStatus: 1,
			// age,
			// district,
			// about,
		},

		validationSchema,

		onSubmit: async values => {
			// const response = await createUser({
			// 	name: values.name,
			// 	email: values.email,
			// 	username: values.username,
			// 	password: values.password,
			// 	apartment: values.apartment,
			// 	admin: values.admin,
			// });
			const response = await createUser(values);

			if (response.status !== 201 || 200) {
				alert('Erro ao cadastrar usuário');
				return;
			}

			alert('Usuário cadastrado com sucesso!');
			formik.handleReset();
			navigate('/');
		},
	});

	return (
		<Styled.SBackground>
			<Styled.SContainer>
				{step === 1 && (
					<AdoptionStep1
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 2 && (
					<AdoptionStep2
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 3 && (
					<AdoptionStep3
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 4 && (
					<AdoptionStep4
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}
			</Styled.SContainer>
		</Styled.SBackground>
	);
}
