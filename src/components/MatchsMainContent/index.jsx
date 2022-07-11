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

	const fivePetsRandomList = randomList.slice(0, 5);

	// const fivePetsRandomList = [];

	// for (let i = 0; i < 5; i++) {
	// 	fivePetsRandomList.push(randomList[i]);
	// }

	// console.log(randomList);
	// console.log(fivePetsRandomList);
	const getPetLocation = async petUserId => {
		const user = await getUserById(petUserId);
		const location = `${user.cidade} - ${user.uf}`;
		
		console.log(location);
		return location;
	};

	const userList = fivePetsRandomList.map(pet => {
		return pet.userID;
	});

	const locationList = userList.map(user => {
		return getPetLocation(user);
	});

	console.log(locationList);

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
	}, [dispatch]);

	return (
		<Container>
			<S.Titulo>Confira essas fofuras</S.Titulo>
			<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList.map(pet => (
					<S.Column key={pet.id}>
						<Link exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer>
								<S.CardImage variant="top" src={pet.petImage} />
								<S.CardBody>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									<S.CardText className="cardText">
										{/* {`${getPetLocation(pet.userID)}`} */}
										{/* {pet.userID} - {teste2[index].userID} */}
										{pet.raca} 
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
