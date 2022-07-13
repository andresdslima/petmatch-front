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
	const userItem = useSelector(state => state.persistedReducer.user);
	const data = JSON.parse(localStorage.getItem('data'));
	const accessToken = data.payload.accessToken;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleChange(event) {
		const file = event.target.files[0];
		formik.setFieldValue('petImage', file);
	}

	useEffect(() => {
		getUserById(data.payload.id).then(user => dispatch(storeUser(user)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const formik = useFormik({
		initialValues: {
			especie: '',
			idade: 0,
			sexo: '',
			peso: 0,
			porte: '',
			tamanho: 0,
			cor: '',
			raca: '',
			castrado: false,
			vacinado: false,
			chip: '',
			sobre: '',
			petImage: undefined,
			nome: '',
		},

		// validationSchema,

		onSubmit: async values => {
			api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
			api.defaults.headers.common['Content-Type'] = 'multipart/form-data';

			if (!userItem.cidade) {
				alert('É necessário completar seu cadastro primeiro');
				navigate(`/users/${userItem.id}`);
				return;
			}

			const formData = new FormData();
			formData.append('especie', values.especie);
			formData.append('nome', values.nome);
			formData.append('idade', values.idade);
			formData.append('sexo', values.sexo);
			formData.append('peso', values.peso);
			formData.append('tamanho', values.tamanho);
			formData.append('porte', values.porte);
			formData.append('cor', values.cor);
			formData.append('raca', values.raca);
			formData.append('castrado', values.castrado);
			formData.append('vacinado', values.vacinado);
			formData.append('chip', values.chip);
			formData.append('sobre', values.sobre);
			formData.append('petImage', values.petImage, 'petImage.png');

			const data = await postPets(formData);

			dispatch(addNewPet({ pets: data }));
			formik.resetForm();
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
								<S.SelectOption value="AC">
									AC
								</S.SelectOption>
								<S.SelectOption value="Pitbull">Pitbull</S.SelectOption>
								<S.SelectOption value="Shitzu">Shit-zu</S.SelectOption>
								<S.SelectOption value="Pug">Pug</S.SelectOption>
								<S.SelectOption value="Maltês">Maltês</S.SelectOption>
								<S.SelectOption value="Buldogue">Buldogue</S.SelectOption>
								<S.SelectOption value="Spitz Alemão">
									Spitz Alemão
								</S.SelectOption>
								<S.SelectOption value="Dachshund">Dachshund</S.SelectOption>
								<S.SelectOption value="Pastor-Alemão">
									Pastor-Alemão
								</S.SelectOption>
								<S.SelectOption value="Basset">Basset</S.SelectOption>
								<S.SelectOption value="Schnauzer">Schnauzer</S.SelectOption>
								<S.SelectOption value="Poodle">Poodle</S.SelectOption>
								<S.SelectOption value="Persa">Persa</S.SelectOption>
								<S.SelectOption value="Himalaia">Himalaia</S.SelectOption>
								<S.SelectOption value="Siamês">Siamês</S.SelectOption>
								<S.SelectOption value="Maine Coon">Maine Coon</S.SelectOption>
								<S.SelectOption value="Angorá">Angorá</S.SelectOption>
								<S.SelectOption value="Sphynx">Sphynx</S.SelectOption>
								<S.SelectOption value="Ragdoll">Ragdoll</S.SelectOption>
								<S.SelectOption value="Ashera">Ashera</S.SelectOption>
								<S.SelectOption value="American Shorthair">
									American Shorthair
								</S.SelectOption>
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
