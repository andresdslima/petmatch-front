import './styles.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CardImage from '../../assets/images/godofredo.svg';
import ScreenShot from '../../assets/images/matchIcon.png';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPet, setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';

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
        };
      };

      return counter;
    }, 0);
  
     if (objectForm.idade_max >= objectApi.idade) {
         count ++;
        };
     if (objectForm.peso_max >= objectApi.peso) {
          count ++;
         };
     if (objectForm.tamanho_max >= objectApi.tamanho) {
          count ++;
         };

    return (count / Math.min(objectFormLength, objectApiLength)) * 100;
  };

const CardMatches = () => {
	const petList = useSelector(state => state.petsSlice);
	const dispatch = useDispatch();

	const orderedList = [...petList.pets];
	
	orderedList.sort((a,b)=> calculateMatch(petList.petsFilter, b) - calculateMatch(petList.petsFilter, a));
	
	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
	}, []);

	return (
		<div className="container mb-5">
			<Row xs={2} sm={2} md={3} lg={4} xl={5}>
				{orderedList.map(pet => (
					<Col className="d-flex justify-content-center g-4" key={pet.nome}>
						<Link exact to="/">
							<Card className="cardContainer">
								<Card.Img variant="top" src={CardImage} className="cardImg" />
								<Card.Body>
									<Card.Title className="cardTitle">{pet.nome}</Card.Title>
									<Card.Text className="cardText">
										Multiverso dos pugs - PR
									</Card.Text>
								</Card.Body>
								<div className="matchIconContainer">
									<img
										src={ScreenShot}
										alt="Icone de Match"
										className="matchIcon"
									/>
									<span className="matchPercent">{calculateMatch(petList.petsFilter, pet)}%</span>
								</div>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default CardMatches;
