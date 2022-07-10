import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'react-bootstrap';

export const Titulo = styled.h3`
	font-size: 1.3vw;
	font-weight: 600;

	@media (max-width: 768px){
		font-size: 5vw;
	}

	@media (max-width: 468px){
		font-size: 7vw;
	}
`;
export const CardContainer2 = styled(Card)`
	width: 14em;
	border-radius: 1rem;
	box-shadow: 0 .25rem .25rem rgba(159, 159, 159, 0.33);
	border-width: 0;

	@media (max-width: 468px){
		width: 40vw;
	}
`;

export const CardImage2 = styled(CardImg)`
	width: 100%;
	height: 11em;
	object-fit: cover;
	border-radius: 1rem 1rem 0 0;
`;

export const CardBody2 = styled(Card.Body)`
	text-align: center;
`;

export const CardTitle2 = styled(Card.Title)`
	font-size: 1vw;
	color: #404145;
	font-weight: 600;

	@media (max-width: 768px){
		font-size: 2.5vw;
	}

	@media (max-width: 468px){
		font-size: 3.5vw;
	}
`;

export const CardText2 = styled(Card.Text)`
	font-size: .75vw;
	color: #404145;

	@media (max-width: 768px){
		font-size: 2vw;
	}

	@media (max-width: 468px){
		font-size: 3vw;
	}
`;

export const SLink = styled(Link)`
	&:hover {
		border: .25rem solid #F88B5C;
		border-radius: 1.25rem;
	}
`;
