import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewPet } from '../../store/modules/pets';
import { postPets } from '../../services/mainAPI/pets';

const GiveForAdoptionForm = () => {

	const data = JSON.parse(localStorage.getItem('data'));
	const id = data.payload.id;

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			id: '',
			especie: '',
			idade: 0,
			sexo: '',
			peso: 0,
			porte: '',
			tamanho: 0,
			cor: '',
			raca: '',
			castrado: '',
			vacinado: '',
			chip: '',
			sobre: '',
			petImage: '',
			userId: ''
		},
		onSubmit: async values => {
			const data = await postPets({...values, user_id: id})
			dispatch (addNewPet({pets: data}))
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
							<S.Label>Idade (anos)</S.Label>
							<Form.Control
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
							<S.Label>Peso (kg)</S.Label>
							<Form.Control
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
							<Form.Control
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
							<S.Label>Raça</S.Label>
							<Form.Control
								id="raca"
								type="text"
								placeholder="Ex: Shit-zu"
								value={formik.values.raca}
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
							<S.Label>Chip</S.Label>
							<Form.Control
								id="chip"
								type="text"
								placeholder="Ex: D4J7X9"
								value={formik.values.raca}
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<S.Label>Imagem</S.Label>
							<Form.Control
								id="petImage"
								type="file"
								value={formik.values.raca}
								onChange={formik.handleChange}
							/>
						</Form.Group>
						<Form.Group>
						<S.Label>Sobre</S.Label>
						<textarea id="sobre" placeholder="Conte-nos mais sobre o seu pet." value={formik.values.sobre} onChange={formik.handleChange}></textarea>
						</Form.Group>
					</S.ContainerForm>
					<S.ButtonContainer className="my-5">
						<S.SearchButton
							variant="primary"
							type="submit"
						>
							Cadastrar
						</S.SearchButton>
					</S.ButtonContainer>
				</Form>
			</Container>
		</>
	);
};

export default GiveForAdoptionForm;
