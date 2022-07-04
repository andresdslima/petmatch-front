import './styles.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CardImage from '../../../assets/images/godofredo.svg';
import ScreenShot from '../../../assets/images/matchIcon.png';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPet, setPetList } from '../../../store/modules/pets'
import { getPets } from '../../../services/mainAPI/pets'

export const calculateMatch = (obj1, obj2) => {
	const obj1Length = Object.keys(obj1).length;
	const obj2Length = Object.keys(obj2).length;
	const smaller = obj1Length < obj2Length ? obj1 : obj2;
	const greater = smaller === obj1 ? obj2 : obj1;
	const smallObjKeys = Object.keys(smaller);

	let count = smallObjKeys.reduce((counter, key) => {
		if (greater[key] === smaller[key]) return ++counter;

		// if (
		// 	smaller[key] <= greater[`${key}_max`] &&
		// 	smaller[key] >= greater[`${key}_min`]
		// )
		// 	return ++counter;

		if (smaller[key] <= greater[`${key}_max`]) return ++counter;

		return counter;
	}, 0);

	return (count / Math.min(obj1Length, obj2Length)) * 100;
};

const CardMatches = () => {
	const petList = useSelector((state) => state.petsReducer)
	const dispatch = useDispatch()

	useEffect(()=>{
		getPets().then(pets => dispatch(setPetList(pets)))
	  },[])

	return (
		<Card className="cardContainer">
			<Card.Img variant="top" src={CardImage} className="cardImg" />
			<Card.Body>
				<Card.Title className="cardTitle">Godofredo</Card.Title>
				<Card.Text className="cardText">Multiverso dos pugs - PR</Card.Text>
			</Card.Body>
			<div className="matchIconContainer">
				<img src={ScreenShot} alt="Icone de Match" className="matchIcon" />
				{/* Pegar a % chamando a API p comparar as caracteristicas */}
                <span className="matchPercent">90%</span>
			</div>
		</Card>
	);
};

export default CardMatches;
