import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewPet } from '../../store/modules/pets';
import { storeUser } from '../../store/modules/users';
import { postPets } from '../../services/mainAPI/pets';
import { api } from '../../services/mainAPI/config';
import { getUserById } from '../../services/mainAPI/users';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GiveForAdoptionForm = () => {
	const data = JSON.parse(localStorage.getItem('data'));
	const accessToken = data.payload.accessToken;
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
			chip: null,
			sobre: '',
			petImage: undefined,
			nome: '',
		},

		// validationSchema,

		onSubmit: async values => {
			api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
			api.defaults.headers.common['Content-Type'] = 'multipart/form-data';

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
			formData.append('chip', values.chip ? values.chip : null);
			formData.append('sobre', values.sobre);
			formData.append('petImage', values.petImage, 'petImage.png');

			const data = await postPets(formData);

			dispatch(addNewPet({ pets: data }));
			formik.resetForm();
			navigate('/');
			window.location.reload();
		},
	});

	return (
		<>
			<S.TitleBackground className="mt-5">
				<S.Title>Cadastre seu pet para doação</S.Title>
			</S.TitleBackground>
			<Container className="my-5">
				<Form className="form" onSubmit={formik.handleSubmit}>
					<S.ContainerForm className="text-start">
						<Form.Group>
							<S.Label>Espécie</S.Label>
							<S.FormItemSelect
								id="especie"
								type="select"
								value={formik.values.especie}
								onChange={formik.handleChange}
								required
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="Cachorro">Cães</S.SelectOption>
								<S.SelectOption value="Gato">Gatos</S.SelectOption>
								<S.SelectOption value="Ave">Aves</S.SelectOption>
								<S.SelectOption value="Réptil">Répteis</S.SelectOption>
								<S.SelectOption value="Peixe">Peixes</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Nome</S.Label>
							<S.FormItem
								id="nome"
								name="nome"
								type="text"
								placeholder="Ex: Scooby"
								value={formik.values.nome}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Idade (anos)</S.Label>
							<S.FormItem
								id="idade"
								type="number"
								placeholder="Ex: 3"
								value={formik.values.idade}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Sexo</S.Label>
							<S.FormItemSelect
								id="sexo"
								type="select"
								placeholder="Ex: feminino"
								value={formik.values.sexo}
								required
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="Fêmea">Feminino</S.SelectOption>
								<S.SelectOption value="Macho">Masculino</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Raça</S.Label>
							<S.FormItemSelect
								id="raca"
								type="select"
								value={formik.values.raca}
								required
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="SRD">
									SRD (Sem raça definida)
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
						<Form.Group>
							<S.Label>Peso (kg)</S.Label>
							<S.FormItem
								id="peso"
								type="number"
								placeholder="Ex: 10"
								value={formik.values.peso}
								required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Porte</S.Label>
							<S.FormItemSelect
								id="porte"
								type="select"
								placeholder="Ex: 100"
								value={formik.values.porte}
								required
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="Pequeno">
									Pequeno (até 30 cm)
								</S.SelectOption>
								<S.SelectOption value="Médio">Médio (até 60 cm)</S.SelectOption>
								<S.SelectOption value="Grande">
									Grande (acima de 60 cm)
								</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Tamanho (cm)</S.Label>
							<S.FormItem
								id="tamanho"
								type="number"
								required
								placeholder="Ex: 40"
								value={formik.values.tamanho}
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Cor</S.Label>
							<S.FormItemSelect
								id="cor"
								type="select"
								placeholder="Ex: Branco"
								value={formik.values.cor}
								required
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="Escuro">Escuro</S.SelectOption>
								<S.SelectOption value="Claro">Claro</S.SelectOption>
								<S.SelectOption value="Misto">Misto</S.SelectOption>
								<S.SelectOption valu="Caramelo">Caramelo</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Chip</S.Label>
							<S.FormItem
								id="chip"
								name="chip"
								type="text"
								placeholder="Ex: D4J7X9"
								value={formik.values.chip}
								// required
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<S.AllCheckboxesContainer>
							<S.CheckboxContainer>
								<S.Label>Castrado</S.Label>
								<S.Checkbox
									type="checkbox"
									id="castrado"
									label="Animais castrados"
									value={formik.values.castrado}
									onChange={formik.handleChange}
								/>
							</S.CheckboxContainer>
							<S.CheckboxContainer>
								<S.Label>Vacinado</S.Label>
								<S.Checkbox
									type="checkbox"
									id="vacinado"
									label="Animais vacinados"
									value={formik.values.castrado}
									onChange={formik.handleChange}
								/>
							</S.CheckboxContainer>
						</S.AllCheckboxesContainer>
						<Form.Group>
							<S.Label>Imagem</S.Label>
							<S.FormItem
								id="petImage"
								name="petImage"
								type="file"
								accept="image/*"
								value={undefined}
								onChange={event => handleChange(event)}
								required
							/>
							<small>
								<em>*Tamanho máximo 1Mb.</em>
							</small>
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

export default GiveForAdoptionForm;
