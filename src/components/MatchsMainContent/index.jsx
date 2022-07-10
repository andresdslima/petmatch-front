import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { getUserById } from '../../services/mainAPI/users';

const MatchMainContent = () => {
	const petList = useSelector(state => state.petsSlice.pets);
	const dispatch = useDispatch();

	const randomList = [...petList];
	randomList.sort(() => Math.random() - 0.5);

	const fivePetsRandomList2 = randomList.slice(0, 5);

	const fivePetsRandomList = [];
	const teste2 = [];

	const getPetLocation = async petUserId => {
		const user = await getUserById(petUserId).then(res => res);
		const location = `${user}`;
		// const location = `${user.cidade} - ${user.uf}`;
		console.log(location);

		// if (!user.cidade) {
		// 	return '';
		// } else {
		// 	return location;
		// }
	};

	for (let i = 0; i < 5; i++) {
		fivePetsRandomList.push(randomList[i]);
		console.log(randomList[i]);
		teste2.push(getPetLocation(5).then(res => res));
	}
	console.log(teste2);

	const petLocations = fivePetsRandomList2.map(pet => pet.userID);

	const [teste, setTeste] = useState('');

	// console.log(randomList);
	// console.log(fivePetsRandomList);
	// const getPetLocation = async petUserId => {
	// 	const user = await getUserById(petUserId);
	// 	const location = `${user.cidade} - ${user.uf}`;
	// 	console.log(location);
	// 	return location;
	// };

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
	}, [dispatch]);

	return (
		<Container>
			<S.Titulo>Confira essas fofuras</S.Titulo>
			<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList2.map((pet, index) => (
					<S.Column key={pet.id}>
						<Link exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer>
								<S.CardImage variant="top" src={pet.petImage} />
								<S.CardBody>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									<S.CardText className="cardText">
										{/* {`${getPetLocation(pet.userID)}`} */}
										{/* {pet.userID} - {teste2[index].userID} */}
										{pet.userID} - {petLocations[index]} São Paulo - SP
									</S.CardText>
								</S.CardBody>
							</S.CardContainer>
						</Link>
					</S.Column>
				))}
			</S.RowContainer>
		</Container>
	);
};

export default MatchMainContent;
