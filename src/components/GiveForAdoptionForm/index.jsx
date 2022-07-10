import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewPet } from '../../store/modules/pets';
import { postPets } from '../../services/mainAPI/pets';
import { api } from '../../services/mainAPI/config';
// import * as Yup from 'yup';

// const validationSchema = Yup.object({
// 	nome: Yup.string().min(6, 'Nome completo').required('*'),
// 	email: Yup.string().email('Email inválido').required('*'),
// 	celular: Yup.string().min(11, '11 dígitos').required('*'),
// 	cidade: Yup.string().min(3, 'Digite sua cidade').required('*'),
// 	estado: Yup.string().min(2, 'Escolha seu estado').required('*'),
// 	cep: Yup.string().min(8, '8 dígitos').required('*'),
// 	endereco: Yup.string().min(6, 'Endereço completo').required('*'),
// 	enderecoNumero: Yup.number().required('*'),
// 	enderecoComplemento: Yup.string(),
// });

const GiveForAdoptionForm = () => {
	const data = JSON.parse(localStorage.getItem('data'));
	const accessToken = data.payload.accessToken;
	const dispatch = useDispatch();

	function handleChange(event) {
		const file = event.target.files[0];
		formik.setFieldValue('petImage', file);
	}

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
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="Fêmea">Feminino</S.SelectOption>
								<S.SelectOption value="Macho">Masculino</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Raça</S.Label>
							<S.FormItem
								id="raca"
								name="raca"
								type="text"
								placeholder="Ex: Beagle"
								value={formik.values.raca}
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Peso (kg)</S.Label>
							<S.FormItem
								id="peso"
								type="number"
								placeholder="Ex: 10"
								value={formik.values.peso}
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
							<small>Tamanho máximo 1Mb</small>
						</Form.Group>
						<S.TextareaContainer>
							<S.Label>Sobre</S.Label>
							<S.TextArea
								id="sobre"
								placeholder="Conte-nos mais sobre o seu pet."
								value={formik.values.sobre}
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
