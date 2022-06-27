import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import dog from '../../assets/images/dog-login.png';
import footprints from '../../assets/watermarks/patas.jpg';
import * as Styled from './styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../services/mainAPI/users';
import RegistrationStep1 from '../RegistrationStep1';
import RegistrationStep2 from '../RegistrationStep2';
import RegistrationStep3 from '../RegistrationStep3';
import RegistrationStep4 from '../RegistrationStep4';
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

export default function RegistrationForm() {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const { register, errors, handleSubmit } = useForm();
	const [step, setStep] = useState(4);
	const [formValues, setFormValues] = useState({});

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
			console.log(values);
			// const response = await createUser({
			// 	name: values.name,
			// 	email: values.email,
			// 	username: values.username,
			// 	password: values.password,
			// 	apartment: values.apartment,
			// 	admin: values.admin,
			// });
			const response = await createUser(values);
			console.log(response);

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
			<Styled.SHeader>
				<img src={footprints} alt="Pegadas de animal" />
			</Styled.SHeader>

			<Styled.SContainer>
				<Styled.SImage src={dog} alt="Cachorro" />

				{step === 1 && (
					<RegistrationStep1
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 2 && (
					<RegistrationStep2
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 3 && (
					<RegistrationStep3
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 4 && (
					<RegistrationStep4
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}
			</Styled.SContainer>

			<Styled.SFooter>
				<img src={footprints} alt="Pegadas de animal" />
			</Styled.SFooter>
		</Styled.SBackground>
	);
}
