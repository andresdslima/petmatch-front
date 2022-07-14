import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { storeUser } from '../../store/modules/users';
import { api } from '../../services/mainAPI/config';
import { getUserById, updateUser } from '../../services/mainAPI/users';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
	cpf: Yup.string().min(11, 'CPF inválido').required('*'),
	contato: Yup.string().min(11, 'Contato inválido (Digite DDD + número)').required('*'),
	cidade: Yup.string().min(3, 'Escolha sua cidade').required('*'),
	uf: Yup.string().min(2, 'Escolha seu estado').required('*'),
	bairro: Yup.string().min(3, 'Digite seu bairro' ).required('*'),
	cep: Yup.string().min(8, 'CEP inválido').required('*'),
	logradouro: Yup.string().min(6, 'Digite endereço completo').required('*'),
	numero_logradouro: Yup.number().required('*'),
});

const UserEditForm = () => {
	const userItem = useSelector(state => state.persistedReducer.user);
	const userId = userItem.id;
	const data = JSON.parse(localStorage.getItem('data'));
	const accessToken = data.payload.accessToken;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		getUserById(data.payload.id).then(user => dispatch(storeUser(user)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const formik = useFormik({
		initialValues: {
			nome: `${userItem.nome ?? ''}`,
			sobrenome: `${userItem.sobrenome ?? ''}`,
			email: '',
			senha: '',
			cpf: `${userItem.cpf ?? ''}`,
			contato: `${userItem.contato ?? ''}`,
			cep: `${userItem.cep ?? ''}`,
			logradouro: `${userItem.logradouro ?? ''}`,
			numero_logradouro: `${userItem.numero_logradouro ?? ''}`,
			complemento: `${userItem.complemento ?? ''}`,
			bairro: `${userItem.bairro ?? ''}`,
			cidade: `${userItem.cidade ?? ''}`,
			uf: `${userItem.uf ?? ''}`,
			sobre: `${userItem.sobre ?? ''}`,
		},

		validationSchema,

		onSubmit: async values => {
			api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

			// Falta poder alterar o email e senha do usuario

			const response = await updateUser(userId, {
				cpf: `${values.cpf}`,
				contato: `${values.contato}`,
				cep: `${values.cep}`,
				logradouro: values.logradouro,
				numero_logradouro: `${values.numero_logradouro}`,
				complemento: values.complemento,
				bairro: values.bairro,
				cidade: values.cidade,
				uf: values.uf,
				sobre: values.sobre,
			});

			if (response.status !== 200) {
				alert('Erro ao atualizar usuário');
				return;
			}

			dispatch(storeUser(response.data));
			navigate('/');
		},
	});

	return (
		<>
			<S.TitleBackground className="mt-5">
				<S.Title>Complete seu cadastro!</S.Title>
			</S.TitleBackground>
			<Container className="my-5">
				<Form className="form" onSubmit={formik.handleSubmit}>
					<S.ContainerForm className="text-start">
						{/* <S.FormGroup>
							<S.Label>Nome</S.Label>
							{formik.errors.nome && (
								<small>
									<em>{formik.errors.nome}</em>
								</small>
							)}
							<S.FormItem
								id="nome"
								name="nome"
								type="text"
								placeholder="Seu nome"
								value={formik.values.nome}
								required
								onChange={formik.handleChange}
							/>
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>Sobrenome</S.Label>
							<S.FormItem
								id="sobrenome"
								name="sobrenome"
								type="text"
								placeholder="Seu sobrenome completo"
								value={formik.values.sobrenome}
								required
								onChange={formik.handleChange}
							/>
						</S.FormGroup> */}
						<S.FormGroup>
							<S.Label>CPF</S.Label>
							
							<S.FormItem
								id="cpf"
								name="cpf"
								type="number"
								placeholder="Ex: 12345678901"
								value={formik.values.cpf}
								onChange={formik.handleChange}
								disabled={userItem.cpf ? true : false}
							/>
							{formik.errors.cpf && (
						<small>
							<em>{formik.errors.cpf}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>Contato</S.Label>
							<S.FormItem
								id="contato"
								name="contato"
								type="number"
								placeholder="Ex: 11912345678"
								value={formik.values.contato}
								required
								onChange={formik.handleChange}
							/>
								{formik.errors.contato && (
						<small>
							<em>{formik.errors.contato}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>CEP</S.Label>
							<S.FormItem
								id="cep"
								name="cep"
								type="number"
								placeholder="Ex: 12345678"
								value={formik.values.cep}
								required
								onChange={formik.handleChange}
							/>
							{formik.errors.cep && (
						<small>
							<em>{formik.errors.cep}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>Logradouro</S.Label>
							<S.FormItem
								id="logradouro"
								name="logradouro"
								type="text"
								placeholder="Seu endereço"
								value={formik.values.logradouro}
								required
								onChange={formik.handleChange}
							/>
							{formik.errors.logradouro && (
						<small>
							<em>{formik.errors.logradouro}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>Número</S.Label>
							<S.FormItem
								id="numero_logradouro"
								name="numero_logradouro"
								type="number"
								placeholder="Número da residência"
								required
								value={formik.values.numero_logradouro}
								onChange={formik.handleChange}
							/>
							{formik.errors.numero_logradouro && (
						<small>
							<em>{formik.errors.numero_logradouro}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>Complemento</S.Label>
							<S.FormItem
								id="complemento"
								name="complemento"
								type="text"
								placeholder="Opcional"
								required
								value={formik.values.complemento}
								onChange={formik.handleChange}
							/>
							{formik.errors.complemento && (
						<small>
							<em>{formik.errors.complemento}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label>Bairro</S.Label>
							<S.FormItem
								id="bairro"
								name="bairro"
								type="text"
								placeholder="Seu bairro"
								value={formik.values.bairro}
								required
								onChange={formik.handleChange}
							/>
							{formik.errors.bairro && (
						<small>
							<em>{formik.errors.bairro}</em>
						</small>
					)}
						</S.FormGroup>
						<S.FormGroup>
							<S.Label htmlFor="cidade">Cidade</S.Label>
							<S.FormItemSelect
								id="cidade"
								name="cidade"
								type="select"
								value={formik.values.cidade}
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="Aracaju">Aracaju</S.SelectOption>
								<S.SelectOption value="Belém">Belém</S.SelectOption>
								<S.SelectOption value="Belo Horizonte">
									Belo Horizonte
								</S.SelectOption>
								<S.SelectOption value="Boa Vista">Boa Vista</S.SelectOption>
								<S.SelectOption value="Brasília">Brasília</S.SelectOption>
								<S.SelectOption value="Campo Grande">
									Campo Grande
								</S.SelectOption>
								<S.SelectOption value="Cuiabá">Cuiabá</S.SelectOption>
								<S.SelectOption value="Curitiba">Curitiba</S.SelectOption>
								<S.SelectOption value="Florianópolis">
									Florianópolis
								</S.SelectOption>
								<S.SelectOption value="Fortaleza">Fortaleza</S.SelectOption>
								<S.SelectOption value="Goiânia">Goiânia</S.SelectOption>
								<S.SelectOption value="João Pessoa">João Pessoa</S.SelectOption>
								<S.SelectOption value="Macapá">Macapá</S.SelectOption>
								<S.SelectOption value="Maceió">Maceió</S.SelectOption>
								<S.SelectOption value="Manaus">Manaus</S.SelectOption>
								<S.SelectOption value="Natal">Natal</S.SelectOption>
								<S.SelectOption value="Palmas">Palmas</S.SelectOption>
								<S.SelectOption value="Porto Alegre">
									Porto Alegre
								</S.SelectOption>
								<S.SelectOption value="Porto Velho">Porto Velho</S.SelectOption>
								<S.SelectOption value="Recife">Recife</S.SelectOption>
								<S.SelectOption value="Rio Branco">Rio Branco</S.SelectOption>
								<S.SelectOption value="Rio de Janeiro">
									Rio de Janeiro
								</S.SelectOption>
								<S.SelectOption value="Salvador">Salvador</S.SelectOption>
								<S.SelectOption value="São Luís">São Luís</S.SelectOption>
								<S.SelectOption value="São Paulo">São Paulo</S.SelectOption>
								<S.SelectOption value="Teresina">Teresina</S.SelectOption>
								<S.SelectOption value="Vitória">Vitória</S.SelectOption>
							</S.FormItemSelect>
							{formik.errors.cidade && (
						<small>
							<em>{formik.errors.cidade}</em>
						</small>
					)}
							</S.FormGroup>
							<S.FormGroup>
								<S.Label>Estado</S.Label>
								<S.FormItemSelect
									id="uf"
									name="uf"
									type="select"
									value={formik.values.uf}
									required
									onChange={formik.handleChange}
								>
									<S.SelectOption value=""></S.SelectOption>
									<S.SelectOption value="AC">AC</S.SelectOption>
									<S.SelectOption value="AC">AC</S.SelectOption>
									<S.SelectOption value="AL">AL</S.SelectOption>
									<S.SelectOption value="AP">AP</S.SelectOption>
									<S.SelectOption value="AM">AM</S.SelectOption>
									<S.SelectOption value="BA">BA</S.SelectOption>
									<S.SelectOption value="CE">CE</S.SelectOption>
									<S.SelectOption value="DF">DF</S.SelectOption>
									<S.SelectOption value="ES">ES</S.SelectOption>
									<S.SelectOption value="GO">GO</S.SelectOption>
									<S.SelectOption value="MA">MA</S.SelectOption>
									<S.SelectOption value="MT">MT</S.SelectOption>
									<S.SelectOption value="MS">MS</S.SelectOption>
									<S.SelectOption value="MG">MG</S.SelectOption>
									<S.SelectOption value="PA">PA</S.SelectOption>
									<S.SelectOption value="PB">PB</S.SelectOption>
									<S.SelectOption value="PR">PR</S.SelectOption>
									<S.SelectOption value="PE">PE</S.SelectOption>
									<S.SelectOption value="PI">PI</S.SelectOption>
									<S.SelectOption value="RJ">RJ</S.SelectOption>
									<S.SelectOption value="RN">RN</S.SelectOption>
									<S.SelectOption value="RS">RS</S.SelectOption>
									<S.SelectOption value="RO">RO</S.SelectOption>
									<S.SelectOption value="RR">RR</S.SelectOption>
									<S.SelectOption value="SC">SC</S.SelectOption>
									<S.SelectOption value="SP">SP</S.SelectOption>
									<S.SelectOption value="SE">SE</S.SelectOption>
									<S.SelectOption value="TO">TO</S.SelectOption>
								</S.FormItemSelect>
								{formik.errors.uf && (
						<small>
							<em>{formik.errors.uf}</em>
						</small>
					)}
							</S.FormGroup>
						{/* <S.FormGroup>
							<S.Label>Alterar email</S.Label>
							<S.FormItem
								id="email"
								name="email"
								type="email"
								placeholder="Digite seu novo email"
								value={formik.values.email}
								// required
								onChange={formik.handleChange}
							/>
							<S.FormGroup>
								<S.Label>Alterar senha</S.Label>
								<S.FormItem
									id="senha"
									name="senha"
									type="password"
									placeholder="Digite sua nova senha"
									value={formik.values.senha}
									// required
									onChange={formik.handleChange}
								/>
								<S.FormGroup>
									<S.Label>Confirmar senha</S.Label>
									<S.FormItem
										id="confirmarSenha"
										name="confirmarSenha"
										type="password"
										placeholder="Confirme sua nova senha"
										value={formik.values.senha}
										// required
										onChange={formik.handleChange}
									/>
								</S.FormGroup>
							</S.FormGroup>
						</S.FormGroup> */}
						<S.TextareaContainer>
							<S.Label>Sobre</S.Label>
							<S.TextArea
								id="sobre"
								placeholder="Conte-nos mais sobre você"
								value={formik.values.sobre}
								required
								onChange={formik.handleChange}
							></S.TextArea>
								{formik.errors.sobre && (
						<small>
							<em>{formik.errors.sobre}</em>
						</small>
					)}
						</S.TextareaContainer>
					</S.ContainerForm>
					<S.ButtonContainer className="my-5">
						<S.SearchButton variant="primary" type="submit">
							Cadastrar
						</S.SearchButton>
					</S.ButtonContainer>
				</Form>
			</Container>
		</>
	);
};

export default UserEditForm;
