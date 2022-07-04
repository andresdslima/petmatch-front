import { Container, Form, Button } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';

const MatchesForm = () => {
	const formik = useFormik({
		initialValues: {especie:"", idademax: "", sexo:"", pesomax:"",  porte:"", cor:"", raca:"", castrado:"", vacinado:""},
		onSubmit: values => {
			console.log(values);
		}
	});

	return (
		<>
			<S.TitleBackground className='mt-5'>
				<S.Title>Encontre seus matches!</S.Title>
			</S.TitleBackground>
			<Container className='my-5'>
				<Form className="form" onSubmit={formik.handleSubmit}>
					<S.ContainerForm>
						<Form.Group>
							<S.Label>Espécie</S.Label>
							<S.FormItemSelect
								id="especie"
								type="select"
								placeholder="especie"
								value={formik.values.especie}
								onChange={formik.handleChange}
							>
								<S.SelectOption value="" data-default disabled selected></S.SelectOption>
								<S.SelectOption value="caes">Cães</S.SelectOption>
								<S.SelectOption value="gatos">Gatos</S.SelectOption>
								<S.SelectOption value="aves">Aves</S.SelectOption>
								<S.SelectOption value="repteis">Répteis</S.SelectOption>
								<S.SelectOption value="exoticos">Exóticos</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Idade máxima</S.Label>
							<S.FormItemSelect
								id="idade"
								type="number"
								placeholder="Ex: 3"
								value={formik.values.idade}
								onChange={formik.handleChange}
							>
							<S.SelectOption value="" data-default disabled selected></S.SelectOption>
							<S.SelectOption value={1}>1 ano</S.SelectOption>
							<S.SelectOption value={2}>2 anos</S.SelectOption>
							<S.SelectOption value={3}>3 anos</S.SelectOption>
							<S.SelectOption value={5}>5 anos</S.SelectOption>
							<S.SelectOption value={10}>Acima de 5 anos</S.SelectOption>
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
								<S.SelectOption value="" data-default disabled selected></S.SelectOption>
								<S.SelectOption value="feminino">Feminino</S.SelectOption>
								<S.SelectOption value="masculino">Masculino</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Peso máximo</S.Label>
							<S.FormItemSelect
								id="peso"
								type="number"
								placeholder="Ex: 10"
								value={formik.values.peso}
								onChange={formik.handleChange}
							>
							<S.SelectOption value="" data-default disabled selected></S.SelectOption>
							<S.SelectOption value={1}>Menor que 1kg</S.SelectOption>
							<S.SelectOption value={3}>3kgs</S.SelectOption>
							<S.SelectOption value={5}>5kgs</S.SelectOption>
							<S.SelectOption value={8}>8kgs</S.SelectOption>
							<S.SelectOption value={10}>Mais que 8kg</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Porte</S.Label>
							<S.FormItemSelect
								id="porte"
								type="number"
								placeholder="Ex: 100"
								value={formik.values.porte}
								onChange={formik.handleChange}
							>
								<S.SelectOption value="" data-default disabled selected></S.SelectOption>
								<S.SelectOption value="pequeno">Pequeno (até 30 cm)</S.SelectOption>
								<S.SelectOption value="medio">Médio (até 60 cm)</S.SelectOption>
								<S.SelectOption value="grande">Grande (acima de 60 cm)</S.SelectOption>
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
								<S.SelectOption value="" data-default disabled selected></S.SelectOption>
								<S.SelectOption value="escuro">Escuro</S.SelectOption>
								<S.SelectOption value="claro">Claro</S.SelectOption>
								<S.SelectOption value="misto">Misto</S.SelectOption>
								<S.SelectOption valu ="caramelo">Caramelo</S.SelectOption>
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
								<S.SelectOption value="" data-default disabled selected></S.SelectOption>
								<S.SelectOption value="viralata">Viralata</S.SelectOption>
								<S.SelectOption value="pitbull">Pitbull</S.SelectOption>
								<S.SelectOption value="shitzu">Shit-zu</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
							<S.CheckboxContainer>
							<S.Label>Castrado</S.Label>
								<S.Checkbox type="checkbox" id="castrado" label="Animais castrados" value={formik.values.castrado}
								onChange={formik.handleChange} />
							</S.CheckboxContainer>
							<S.CheckboxContainer>
							<S.Label>Vacinado</S.Label>
								<S.Checkbox type="checkbox" id="vacinado" label="Animais vacinados" value={formik.values.castrado}
								onChange={formik.handleChange} />
							</S.CheckboxContainer>
					</S.ContainerForm>
					<S.ButtonContainer className="my-5">
					<S.SearchButton variant="primary" type="submit">
						Buscar
					</S.SearchButton>
					</S.ButtonContainer>
				</Form>
			</Container>
		</>
	);
};

export default MatchesForm;
