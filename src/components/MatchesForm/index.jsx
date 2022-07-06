import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import PetsCardsList from '../../components/PetsCardsList';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPetFilter } from '../../store/modules/pets';

const MatchesForm = () => {
	const [toggle, setToggle] = useState(false);
	const usersPref = useSelector(state => state.petsSlice.petsFilter);

	console.log(usersPref);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			especie: '',
			idade_max: 0,
			sexo: '',
			peso_max: 0,
			porte: '',
			tamanho_max: 0,
			cor: '',
			raca: '',
			castrado: '',
			vacinado: '',
		},
		onSubmit: values => {
			dispatch(setPetFilter(values));
		},
	});

	return (
		<>
			<S.TitleBackground className="mt-5">
				<S.Title>Encontre seus matches!</S.Title>
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
								<S.SelectOption value="cachorro">Cães</S.SelectOption>
								<S.SelectOption value="gato">Gatos</S.SelectOption>
								<S.SelectOption value="ave">Aves</S.SelectOption>
								<S.SelectOption value="reptil">Répteis</S.SelectOption>
								<S.SelectOption value="exotico">Exóticos</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Idade máxima</S.Label>
							<S.FormItemSelect
								id="idade_max"
								type="number"
								placeholder="Ex: 3"
								value={formik.values.idade}
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value={1}>1 ano</S.SelectOption>
								<S.SelectOption value={2}>2 anos</S.SelectOption>
								<S.SelectOption value={3}>3 anos</S.SelectOption>
								<S.SelectOption value={5}>5 anos</S.SelectOption>
								<S.SelectOption value={1000}>Acima de 5 anos</S.SelectOption>
							</S.FormItemSelect>
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
								<S.SelectOption value="F">Feminino</S.SelectOption>
								<S.SelectOption value="M">Masculino</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Peso máximo</S.Label>
							<S.FormItemSelect
								id="peso_max"
								type="select"
								placeholder="Ex: 10"
								value={formik.values.peso}
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value={2}>2kg</S.SelectOption>
								<S.SelectOption value={5}>5kg</S.SelectOption>
								<S.SelectOption value={10}>10kg</S.SelectOption>
								<S.SelectOption value={30}>30kg</S.SelectOption>
								<S.SelectOption value={1000}>Mais que 30kg</S.SelectOption>
							</S.FormItemSelect>
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
								<S.SelectOption value="pequeno">
									Pequeno (até 30 cm)
								</S.SelectOption>
								<S.SelectOption value="medio">Médio (até 60 cm)</S.SelectOption>
								<S.SelectOption value="grande">
									Grande (acima de 60 cm)
								</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Tamanho máximo</S.Label>
							<S.FormItemSelect
								id="tamanho_max"
								type="select"
								value={formik.values.tamanho}
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value={20}>20 cm</S.SelectOption>
								<S.SelectOption value={35}>35 cm</S.SelectOption>
								<S.SelectOption value={50}>50 cm</S.SelectOption>
								<S.SelectOption value={65}>65 cm</S.SelectOption>
								<S.SelectOption value={1000}>Mais que 65 cm</S.SelectOption>
							</S.FormItemSelect>
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
								<S.SelectOption value="escuro">Escuro</S.SelectOption>
								<S.SelectOption value="claro">Claro</S.SelectOption>
								<S.SelectOption value="misto">Misto</S.SelectOption>
								<S.SelectOption valu="caramelo">Caramelo</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Raça</S.Label>
							<S.FormItemSelect
								id="raca"
								type="select"
								placeholder="Ex: 100"
								value={formik.values.raca}
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="viralata">Viralata</S.SelectOption>
								<S.SelectOption value="pitbull">Pitbull</S.SelectOption>
								<S.SelectOption value="shitzu">Shit-zu</S.SelectOption>
							</S.FormItemSelect>
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
					</S.ContainerForm>
					<S.ButtonContainer className="my-5">
						<S.SearchButton
							variant="primary"
							type="submit"
							onClick={() => setToggle(true)}
						>
							Buscar
						</S.SearchButton>
					</S.ButtonContainer>
				</Form>
			</Container>
			{toggle && <PetsCardsList />}
		</>
	);
};

export default MatchesForm;
