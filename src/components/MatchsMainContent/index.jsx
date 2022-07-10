import { Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';
import * as S from './styled'

const MatchMainContent = () => {

	const petList = useSelector(state => state.petsSlice);
	const dispatch = useDispatch();

	const randomList = [...petList.pets];

	randomList.sort(() => Math.random() - 0.5);

	const fivePetsRandomList2 = randomList.slice(0, 5);

	const fivePetsRandomList = [];

	for (let i = 0; i < 5; i++) {
		fivePetsRandomList.push(randomList[i]);
	}

	console.log(randomList);
	console.log(fivePetsRandomList);

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<S.Titulo>Confira essas fofuras</S.Titulo>
			<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList2.map(pet => (
					<S.Column key={pet.id}>
						<Link exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer >
								<S.CardImage
									variant="top"
									src={pet.petImage}
								/>
								<S.CardBody>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									<S.CardText className="cardText">
										Multiverso dos pugs - PR
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