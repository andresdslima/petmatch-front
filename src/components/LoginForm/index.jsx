import React from 'react';
import logo from '../../assets/logos/Logo-teste-2.svg';
import dog from '../../assets/images/dog-login.png';
import footprints from '../../assets/watermarks/patas.jpg';
import emailIcon from '../../assets/icons/email-icon.svg';
import passwordIcon from '../../assets/icons/password-icon.svg';
import * as Styled from './styled';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/mainAPI/users';
import { api } from '../../services/mainAPI/config';
// import { signIn } from '../../store/users';

const validationSchema = Yup.object({
	email: Yup.string().email('Email inválido').required('*'),
	password: Yup.string().min(6, 'Mínimo 6 dígitos').required('*'),
});

export default function LoginForm() {
	const navigate = useNavigate();
	// const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},

		validationSchema,

		onSubmit: async values => {
			const response = await loginUser(values);
			// SALVAR RESPOSTA NO REDUX
			
			if (!response.data) {
				alert('Usuário ou senha inválidos!');
				formik.handleReset();
				return;
			}

			// dispatch(loginUser({ token, permission: user.permission }));
			api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
			alert('Usuário logado!');
			formik.handleReset();
			// navigate('/');
		},
	});

	return (
		<Styled.SBackground>
			<Styled.SHeader>
				<img src={footprints} alt="Pegadas de animal" />
			</Styled.SHeader>

			<Styled.SContainer>
				<Styled.SImage src={dog} alt="Cachorro" />

				<Styled.SForm onSubmit={formik.handleSubmit}>
					<img src={logo} alt="Logo da PetMatch" />

					<Styled.SLabel alt="Insira seu email" htmlFor="email">
						Email
					</Styled.SLabel>
					{formik.errors.email && <small>{formik.errors.email}</small>}
					<Form.Group>
						<Styled.SInput
							type="email"
							name="email"
							id="email"
							placeholder="Insira seu email"
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
						<img
							className="icon"
							src={emailIcon}
							alt="Ícone de correspondência"
						/>
					</Form.Group>

					<Styled.SLabel alt="Insira sua senha" htmlFor="password">
						Senha
					</Styled.SLabel>
					{formik.errors.password && <small>{formik.errors.password}</small>}
					<Form.Group>
						<Styled.SInput
							type="password"
							placeholder="Insira sua senha"
							name="password"
							id="password"
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						<img className="icon" src={passwordIcon} alt="Ícone de cadeado" />
					</Form.Group>

					<Styled.SButton type="submit">Entrar</Styled.SButton>
					<Link exact to="/register">
						<Styled.SButton type="button">Cadastrar-se</Styled.SButton>
					</Link>
					<Styled.SLink exact to="/login">Esqueci minha senha</Styled.SLink>
				</Styled.SForm>
			</Styled.SContainer>

			<Styled.SFooter>
				<img src={footprints} alt="Pegadas de animal" />
			</Styled.SFooter>
		</Styled.SBackground>
	);
}
