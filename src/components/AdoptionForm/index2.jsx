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
// import { signIn } from '../../store/users';

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

		// validationSchema,

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
				
			</Styled.SContainer>
		</Styled.SBackground>
	);
}
