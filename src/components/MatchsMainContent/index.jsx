import { Row, Col } from 'react-bootstrap';
import React, { useEffect } from 'react';
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

	for (let i = 0; i < 5; i++) {
		fivePetsRandomList.push(randomList[i]);
	}

	const getPetLocation = async petUserId => {
		const user = await getUserById(petUserId);
		const location = `${user.cidade} - ${user.uf}`;
		console.log(location);
		return location;
	};

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container">
			<S.Titulo>Confira essas fofuras</S.Titulo>
			<Row xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList2.map(pet => (
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
										{`${getPetLocation(pet.userID)}`}
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
