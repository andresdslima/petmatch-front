import React from 'react';
import dog from '../../assets/images/dog-login.png';
import * as Styled from './styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../services/mainAPI/users';
import logo from '../../assets/logos/Logo-teste-2.svg';
import { api } from '../../services/mainAPI/config';
import { signIn } from '../../store/modules/users';

const validationSchema = Yup.object({
	name: Yup.string().min(10, 'Nome completo').required('*'),
	username: Yup.string()
		.min(5, 'Mínimo 5 caractéres')
		.max(10, 'Máximo 10 caractéres')
		.required('*'),
	email: Yup.string().email('Email inválido').required('*'),
	password: Yup.string().min(6, 'Mínimo 6 dígitos').required('*'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Senhas não conferem')
		.required('*'),
});

export default function RegistrationForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// useFormikContext()
	// useContext()

	const formik = useFormik({
		initialValues: {
			name: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			// age,
			// district,
			// about,
		},

		validationSchema,

		onSubmit: async values => {
			const response = await createUser({
				name: values.name,
				username: values.username,
				email: values.email,
				password: values.password,
				userStatus: 1,
				permission: 0,
			});

			if (response.status !== 201) {
				alert('Erro aqui ao cadastrar usuário');
				return;
			}

			alert('Usuário cadastrado com sucesso!');
			formik.handleReset();

			// dispatch(
			// 	signIn({
			// 		accessToken: response.data.accessToken,
			// 		name: response.data.user.name,
			// 		userStatus: response.data.user.userStatus,
			// 		permission: response.data.user.permission,
			// 		id: response.data.user.id,
			// 	}),
			// );

			localStorage.setItem(
				'data',
				JSON.stringify(
					dispatch(
						signIn({
							isLogged: true,
							accessToken: response.data.accessToken,
							username: response.data.user.username,
							userStatus: response.data.user.userStatus,
							permission: response.data.user.permission,
							id: response.data.user.id,
						}),
					),
				),
			);

			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.accessToken}`;
			navigate('/');
		},
	});

	return (
		<Styled.SBackground>
			<Styled.SContainer>
				<Styled.SImage src={dog} alt="Cachorro" />

				<Styled.SForm onSubmit={formik.handleSubmit}>
					<Link exact to="/">
						<img src={logo} alt="Logo da PetMatch" />
					</Link>

					<Styled.SLabel alt="Digite seu nome completo" htmlFor="name">
						Nome completo
					</Styled.SLabel>
					{formik.errors.name && <small>{formik.errors.name}</small>}
					<Styled.SInput
						type="text"
						name="name"
						id="name"
						placeholder="Digite seu nome completo"
						value={formik.values.name}
						onChange={formik.handleChange}
					/>

					<Styled.SLabel alt="Digite seu nome de usuário" htmlFor="username">
						Nome de usuário
					</Styled.SLabel>
					{formik.errors.username && <small>{formik.errors.username}</small>}
					<Styled.SInput
						type="text"
						name="username"
						id="username"
						placeholder="Digite seu nome de usuário"
						value={formik.values.username}
						onChange={formik.handleChange}
					/>

					<Styled.SLabel alt="Digite seu melhor email" htmlFor="email">
						Email
					</Styled.SLabel>
					{formik.errors.email && <small>{formik.errors.email}</small>}
					<Styled.SInput
						type="email"
						name="email"
						id="email"
						placeholder="Digite seu melhor email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>

					<Styled.SLabel
						alt="Digite uma senha com no mínimo 6 dígitos"
						htmlFor="password"
					>
						Senha
					</Styled.SLabel>
					{formik.errors.password && <small>{formik.errors.password}</small>}
					<Styled.SInput
						type="password"
						placeholder="Digite sua senha"
						name="password"
						id="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>

					<Styled.SLabel alt="Confirme sua senha" htmlFor="password">
						Confirmar senha
					</Styled.SLabel>
					{formik.errors.confirmPassword && (
						<small>{formik.errors.confirmPassword}</small>
					)}
					<Styled.SInput
						type="password"
						placeholder="Confirme sua senha"
						name="confirmPassword"
						id="confirmPassword"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
					/>

					<Styled.SButton type="submit">Cadastrar-se</Styled.SButton>
					<Styled.SLink exact to="/login">
						Já possuo cadastro
					</Styled.SLink>
				</Styled.SForm>
			</Styled.SContainer>

			<Styled.SFooter>
				<img src={logo} alt="Logo da PetMatch" />
			</Styled.SFooter>
		</Styled.SBackground>
	);
}
