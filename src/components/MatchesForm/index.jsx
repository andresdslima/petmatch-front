import { Container, Form } from 'react-bootstrap';
import * as S from './styled';
import { useFormik } from 'formik';
import PetsCardsList from '../../components/PetsCardsList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPetFilter } from '../../store/modules/pets';

const MatchesForm = () => {
	const [toggle, setToggle] = useState(false);
	const [click, setClick] = useState(false);
	const dispatch = useDispatch();

	const handleClick = especie => {
		setToggle(true);
		setClick(!click);
	};

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
			castrado: false,
			vacinado: false,
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
					<S.ContainerForm className="text-start mb-5">
						<Form.Group>
							<S.Label>Espécie</S.Label>
							<S.FormItemSelect
								id="especie"
								type="select"
								value={formik.values.especie}
								onChange={formik.handleChange}
							>
								<S.SelectOption value="" disabled></S.SelectOption>
								<S.SelectOption value="Cachorro">Cães</S.SelectOption>
								<S.SelectOption value="Gato">Gatos</S.SelectOption>
								<S.SelectOption value="Ave">Aves</S.SelectOption>
								<S.SelectOption value="Réptil">Répteis</S.SelectOption>
								<S.SelectOption value="Peixe">Peixes</S.SelectOption>
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
								<S.SelectOption value="Fêmea">Feminino</S.SelectOption>
								<S.SelectOption value="Macho">Masculino</S.SelectOption>
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
								<S.SelectOption value="Escuro">Escuro</S.SelectOption>
								<S.SelectOption value="Claro">Claro</S.SelectOption>
								<S.SelectOption value="Misto">Misto</S.SelectOption>
								<S.SelectOption valu="Caramelo">Caramelo</S.SelectOption>
							</S.FormItemSelect>
						</Form.Group>
						<Form.Group>
							<S.Label>Raça</S.Label>
							<S.FormItemSelect
								id="raca"
								type="select"
								value={formik.values.raca}
								onChange={formik.handleChange}
							>
								<S.SelectOption value=""></S.SelectOption>
								<S.SelectOption value="SRD">SRD (Sem raça definida)</S.SelectOption>
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
									value={formik.values.vacinado}
									onChange={formik.handleChange}
								/>
							</S.CheckboxContainer>
						</S.AllCheckboxesContainer>
					</S.ContainerForm>
					<small>*Preencha todos os campos para um match perfeito!</small>
					<S.ButtonContainer className="my-5">
						<S.SearchButton
							variant="primary"
							type="submit"
							onClick={handleClick}
							disabled={!formik.values.especie && true}
						>
							Buscar
						</S.SearchButton>
					</S.ButtonContainer>
				</Form>
			</Container>
			{toggle && <PetsCardsList specie={formik.values.especie} click={click} />}
		</>
	);
};

export default MatchesForm;
