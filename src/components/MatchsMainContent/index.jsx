import { Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
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

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
	}, [dispatch]);

	return (
		<div className="container">
			<S.Titulo>Confira essas fofuras</S.Titulo>
			<Row xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList2.map((pet, index) => (
					<Col className="d-flex justify-content-center g-4" key={pet.id}>
						<S.SLink exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer2 className=" cardContainer">
								<S.CardImage2
									variant="top"
									src={pet.petImage}
									className="cardImg"
								/>
								<S.CardBody2>
									<S.CardTitle2 className="cardTitle">{pet.nome}</S.CardTitle2>
									<S.CardText2 className="cardText">
										{/* {`${getPetLocation(pet.userID)}`} */}
										{/* {pet.userID} - {teste2[index].userID} */}
										{pet.userID} - {petLocations[index]} São Paulo - SP
									</S.CardText2>
								</S.CardBody2>
							</S.CardContainer2>
						</S.SLink>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default MatchMainContent;
