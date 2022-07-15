import Heart from '../../assets/images/OrangeHeart.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPetsBySpecie } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';
import * as S from './styled';

export const calculateMatch = (objectForm, objectApi) => {
	const objectFormLength = Object.keys(objectForm).length;
	const objectApiLength = Object.keys(objectApi).length;
	const smaller = objectFormLength < objectApiLength ? objectForm : objectApi;
	const greater = smaller === objectForm ? objectApi : objectForm;

	let count = Object.keys(smaller).reduce((acc, key) => {
		let counter = acc;

		if (Object.keys(greater).includes(key)) {
			if (greater[key] === smaller[key]) {
				return ++counter;
			}
		}

		return counter;
	}, 0);

	if (parseInt(objectForm.idade_max) >= objectApi.idade) {
		count++;
	}
	if (parseInt(objectForm.peso_max) >= objectApi.peso) {
		count++;
	}
	if (parseInt(objectForm.tamanho_max) >= objectApi.tamanho) {
		count++;
	}
	if (objectForm.uf === objectApi.user.uf) {
		count++;
	}
	if (objectForm.cidade === objectApi.user.cidade) {
		count++;
	}

	const result = (count / Math.min(objectFormLength, objectApiLength)) * 100;
	return result.toFixed(1);
};

const PetsCardList = ({ specie, click }) => {
	const petList = useSelector(state => state.petsSlice);
	const dispatch = useDispatch();
	const orderedList = [...petList.pets];

	orderedList.sort(
		(a, b) =>
			calculateMatch(petList.petsFilter, b) -
			calculateMatch(petList.petsFilter, a),
	);

	useEffect(() => {
		getPetsBySpecie(specie).then(pets => dispatch(setPetList(pets)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [!click]);

	return (
		<S.SContainer>
			<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
				{orderedList.map(pet => (
					<S.Column key={pet.id}>
						<Link exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer>
								<S.GenderIconContainer>
									{pet.sexo === 'Fêmea' ? (
										<S.GenderIconDiv color="#F2323F">
											<S.FemaleGenderIcon />
										</S.GenderIconDiv>
									) : (
										<S.GenderIconDiv color="#8D73E4">
											<S.MaleGenderIcon />
										</S.GenderIconDiv>
									)}
								</S.GenderIconContainer>

								<S.CardImage variant="top" src={pet.petImage} />
								<S.CardBody>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									<S.CardText>
										{pet.raca}
										<br />
										{pet.idade} ano(s)
										<br />
										{pet.user.cidade ? pet.user.cidade : ''} -{' '}
										{pet.user.uf ? pet.user.uf : ''}
									</S.CardText>
								</S.CardBody>
								<S.MatchIconContainer>
									<S.MatchIconDiv>
										<S.MatchIcon src={Heart} alt="Icone de Match" />
									</S.MatchIconDiv>
									<S.MatchPercent>
										{calculateMatch(petList.petsFilter, pet)}%
									</S.MatchPercent>
								</S.MatchIconContainer>
							</S.CardContainer>
						</Link>
					</S.Column>
				))}
			</S.RowContainer>
			<small>
				<em>*SRD: Sem Raça Definida</em>
			</small>
		</S.SContainer>
	);
};

export default PetsCardList;
