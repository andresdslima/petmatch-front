import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPet } from '../../store/modules/pets';
import { storeUser } from '../../store/modules/users';
import { postPets } from '../../services/mainAPI/pets';
import { api } from '../../services/mainAPI/config';
import { getUserById } from '../../services/mainAPI/users';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UserEditForm = () => {
	// const userItem = useSelector(state => state.persistedReducer.user);
	// const data = JSON.parse(localStorage.getItem('data'));
	// const accessToken = data.payload.accessToken;
	// const dispatch = useDispatch();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	getUserById(data.payload.id).then(user => dispatch(storeUser(user)));
	// }, []);

	
	const userId = parseInt(window.location.search.split('?')[1]);

	const formik = useFormik({
		initialValues: {
			cpf: null,
			contato: null,
			cep: null,
			logradouro: null,
			numero_logradouro: null,
			complemento: null,
			bairro: null,
			cidade: null,
			uf: null,
			sobre: null,
		},

		// validationSchema,

		onSubmit: async values => {
			// api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
			const response = await updateUser(userId, {
				cpf: values.cpf,
				contato: values.contato,
				cep: values.cep,
				logradouro: values.logradouro,
				numero_logradouro: values.numero_logradouro,
				complemento: values.complemento,
				bairro: values.bairro,
				cidade: values.cidade,
				uf: values.uf,
				sobre: values.sobre,
			});

			if (response.status !== 201) {
				alert('Erro aqui ao atualizar usuário');
				return;
			}

			// dispatch(addNewPet({ pets: data }));
			// formik.resetForm();
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
						<Form.Group>
							<S.Label>CPF</S.Label>
							<S.FormItem
								id="cpf"
								name="cpf"
								type="number"
								value={formik.values.cpf}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Contato</S.Label>
							<S.FormItem
								id="contato"
								type="number"
								value={formik.values.contato}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>CEP</S.Label>
							<S.FormItem
								id="cep"
								type="number"
								value={formik.values.cep}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Logradouro</S.Label>
							<S.FormItem
								id="logradouro"
								type="text"
								value={formik.values.logradouro}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Número</S.Label>
							<S.FormItem
								id="numero_logradouro"
								type="number"
								required
								value={formik.values.numero_logradouro}
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Complemento</S.Label>
							<S.FormItem
								id="complemento"
								type="text"
								required
								value={formik.values.complemento}
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Bairro</S.Label>
							<S.FormItem
								id="bairro"
								name="bairro"
								type="text"
								value={formik.values.bairro}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Cidade</S.Label>
							<S.FormItem
								id="cidade"
								name="cidade"
								type="text"
								value={formik.values.cidade}
								required
								onChange={formik.handleChange}
							/>
							<Form.Group>
								<S.Label>Uf</S.Label>
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
							</Form.Group>
						</Form.Group>
						<S.TextareaContainer>
							<S.Label>Sobre</S.Label>
							<S.TextArea
								id="sobre"
								placeholder="Conte-nos mais sobre o seu pet."
								value={formik.values.sobre}
								required
								onChange={formik.handleChange}
							></S.TextArea>
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
