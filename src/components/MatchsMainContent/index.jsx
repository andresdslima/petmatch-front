import './styles.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardImage from '../../assets/images/godofredo.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';

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
	}, []);

	return (
		<div className="container mb-5">
			<Row xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList2.map(pet => (
					<Col className="d-flex justify-content-center g-4" key={pet.id}>
						<Link exact to="/">
							<Card className="cardContainer">
								<Card.Img variant="top" src={pet.petImage} className="cardImg" />
								<Card.Body>
									<Card.Title className="cardTitle">{pet.nome}</Card.Title>
									<Card.Text className="cardText">
										Multiverso dos pugs - PR
									</Card.Text>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default MatchMainContent;
