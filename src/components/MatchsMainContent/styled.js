import { Card, CardImg, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Titulo = styled.h3`
	font-size: 21px;
	font-weight: 600;
	margin-bottom: 1.4vw;

	@media only screen and (max-width: 900px) {
		margin-bottom: 3vw;
	}
`;

export const RowContainer = styled(Row)`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 900px) {
		justify-content: center;
	}
`;

export const Column = styled(Col)`
	width: 16.5vw;

	@media only screen and (max-width: 900px) {
		width: 33%;
		margin-bottom: 3vw;
	}

	@media only screen and (max-width: 500px) {
		width: 50%;
		margin-bottom: 7vw;
	}
`;
export const CardContainer = styled(Card)`
	width: 100%;
	border-radius: 16px;
	box-shadow: 0px 4px 4px rgba(159, 159, 159, 0.33);
	border-width: 0;

	&:hover {
		border: 2px solid #f88b5c !important;
		border-radius: 16px;
	}
`;

export const CardImage = styled(CardImg)`
	width: 100%;
	height: 11.76vw;
	object-fit: cover;
	border-radius: 15px 15px 0 0;

	@media only screen and (max-width: 900px) {
		height: 20vw;
	}

	@media only screen and (max-width: 500px) {
		height: 34.5vw;
	}
`;

export const CardBody = styled(Card.Body)`
	text-align: center;
`;

export const CardTitle = styled(Card.Title)`
	font-size: 14px;
	color: #404145;
	font-weight: 600;
`;

export const CardText = styled(Card.Text)`
	font-size: 12px;
	color: #404145;
`;
