import Heart from '../../assets/images/OrangeHeart.svg';
import React, { useEffect } from 'react';
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

	if (objectForm.idade_max >= objectApi.idade) {
		count++;
	}
	if (objectForm.peso_max >= objectApi.peso) {
		count++;
	}
	if (objectForm.tamanho_max >= objectApi.tamanho) {
		count++;
	}

	return (count / Math.min(objectFormLength, objectApiLength)) * 100;
};

const PetsCardList = ({ specie, click }) => {
	const petList = useSelector(state => state.petsSlice);
	const dispatch = useDispatch();
	const orderedList = [...petList.pets];

	// const getPetLocation = async petUserId => {
	// 	const user = await getUserById(petUserId);
	// 	return `${user.cidade} - ${user.estado}`;
	// };

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
								<S.CardImage variant="top" src={pet.petImage} />
								<S.CardBody>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									<S.CardText>
										{pet.raca}
										<br />
										{pet.idade} ano(s)
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
			<small>*SRD: Sem Raça Definida</small>
		</S.SContainer>
	);
};

export default PetsCardList;
