import React from 'react';
import logo from '../../assets/logos/Logo-teste-2.svg';
import dog from '../../assets/images/dog-login.png';
import emailIcon from '../../assets/icons/email-icon.svg';
import passwordIcon from '../../assets/icons/password-icon.svg';
import * as Styled from './styled';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/mainAPI/users';
import { api } from '../../services/mainAPI/config';
import { signIn } from '../../store/modules/users';

const validationSchema = Yup.object({
	email: Yup.string().email('Email inválido').required('*'),
	password: Yup.string().min(6, 'Mínimo 6 dígitos').required('*'),
});

export default function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const count = useSelector(state => state.countReducer);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},

		validationSchema,

		onSubmit: async values => {
			const { accessToken, user } = await loginUser(values);

			if (!user) {
				alert('Usuário ou senha inválidos!');
				return;
			}

			alert('Usuário logado!');
			formik.handleReset();

			localStorage.setItem(
				'data',
				JSON.stringify(
					dispatch(
						signIn({
							isLogged: true,
							accessToken: accessToken,
							firstName: user.firstName,
							userStatus: user.userStatus,
							permission: user.permission,
							id: user.id,
						}),
					),
				),
			);

			api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
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

					<Styled.SLabel alt="Digite seu email" htmlFor="email">
						Email
					</Styled.SLabel>
					{formik.errors.email && <small>{formik.errors.email}</small>}
					<Styled.SGroup>
						<Styled.SInput
							type="email"
							name="email"
							id="email"
							placeholder="Digite seu email"
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
						<img
							className="icon"
							src={emailIcon}
							alt="Ícone de correspondência"
						/>
					</Styled.SGroup>

					<Styled.SLabel alt="Digite sua senha" htmlFor="password">
						Senha
					</Styled.SLabel>
					{formik.errors.password && <small>{formik.errors.password}</small>}
					<Styled.SGroup>
						<Styled.SInput
							type="password"
							placeholder="Digite sua senha"
							name="password"
							id="password"
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						<img className="icon" src={passwordIcon} alt="Ícone de cadeado" />
					</Styled.SGroup>

					<Styled.SButton type="submit">Entrar</Styled.SButton>
					<Link exact to="/register">
						<Styled.SButton type="button">Cadastrar-se</Styled.SButton>
					</Link>

					{/* <Styled.SLink exact to="/login">Esqueci minha senha</Styled.SLink> */}
				</Styled.SForm>
			</Styled.SContainer>

			<Styled.SFooter>
				<img src={logo} alt="Logo da PetMatch" />
			</Styled.SFooter>
		</Styled.SBackground>
	);
}
