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
	firstName: Yup.string().min(4, 'Primeiro nome').required('*'),
	lastName: Yup.string().min(4, 'Sobrenome completo').required('*'),
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
			firstName: '',
			lastName: '',
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
				nome: values.firstName,
				sobrenome: values.lastName,
				email: values.email,
				senha: values.password,
			});

			if (response.status !== 201) {
				alert('Erro ao cadastrar usuário');
				return;
			}

			formik.handleReset();

			// No POST de usuario nao vem o token

			localStorage.setItem(
				'data',
				JSON.stringify(
					dispatch(
						signIn({
							isLogged: true,
							accessToken: response.data.token,
							firstName: response.data.nome,
							userStatus: response.data.userStatus,
							permission: response.data.permissao,
							id: response.data.id,
						}),
					),
				),
			);

			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.token}`;
			navigate('/login');
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

					<Styled.SLabel alt="Digite seu primeiro nome" htmlFor="firstName">
						Primeiro nome
					</Styled.SLabel>
					{formik.errors.firstName && (
						<small>
							<em>{formik.errors.firstName}</em>
						</small>
					)}
					<Styled.SInput
						type="text"
						name="firstName"
						id="firstName"
						placeholder="Digite seu primeiro nome"
						value={formik.values.firstName}
						onChange={formik.handleChange}
					/>

					<Styled.SLabel alt="Digite seu sobrenome completo" htmlFor="lastName">
						Sobrenome completo
					</Styled.SLabel>
					{formik.errors.lastName && (
						<small>
							<em>{formik.errors.lastName}</em>
						</small>
					)}
					<Styled.SInput
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Digite seu sobrenome completo"
						value={formik.values.lastName}
						onChange={formik.handleChange}
					/>

					<Styled.SLabel alt="Digite seu melhor email" htmlFor="email">
						Email
					</Styled.SLabel>
					{formik.errors.email && (
						<small>
							<em>{formik.errors.email}</em>
						</small>
					)}
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
					{formik.errors.password && (
						<small>
							<em>{formik.errors.password}</em>
						</small>
					)}
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
						<small>
							<em>{formik.errors.confirmPassword}</em>
						</small>
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
