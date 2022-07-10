import { Row, Col, Card, Container } from 'react-bootstrap';
import ScreenShot from '../../assets/images/matchIcon.png';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPetsBySpecie } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { getUserById } from '../../services/mainAPI/users';

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

	const getPetLocation = async petUserId => {
		const user = await getUserById(petUserId);
		const location = `${user.cidade} - ${user.uf}`;
		console.log(location);
		return location;
	};

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
		<Container>
			<Row xs={2} sm={2} md={3} lg={4} xl={5}>
				{orderedList.map(pet => (
					<Col className="d-flex justify-content-center g-4" key={pet.id}>
						<Link exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer>
								<S.CardImage variant="top" src={pet.petImage} />
								<Card.Body>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									{/* <span>{`${getPetLocation(pet.userID)}`}</span> */}
									<span>São Paulo - SP</span>
								</Card.Body>
								<S.MatchIconContainer>
									<S.MatchIcon src={ScreenShot} alt="Icone de Match" />
									<S.MatchPercent>
										{calculateMatch(petList.petsFilter, pet)}%
									</S.MatchPercent>
								</S.MatchIconContainer>
							</S.CardContainer>
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default PetsCardList;
