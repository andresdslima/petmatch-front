import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'react-bootstrap';

export const Titulo = styled.h3`
	font-size: 21px;
	font-weight: 600;
`;
export const CardContainer2 = styled(Card)`
	width: 14em;
	border-radius: 16px;
	box-shadow: 0px 4px 4px rgba(159, 159, 159, 0.33);
`;

export const CardImage2 = styled(CardImg)`
	width: 100%;
	height: 11em;
	object-fit: cover;
	border-radius: 15px 15px 0 0;
`;

export const CardBody2 = styled(Card.Body)`
	text-align: center;
`;

export const CardTitle2 = styled(Card.Title)`
	font-size: 14px;
	color: #404145;
	font-weight: 600;
`;

export const CardText2 = styled(Card.Text)`
	font-size: 12px;
	color: #404145;
`;

export const SLink = styled(Link)`
	&:hover {
		border: 2px solid #F88B5C;
		border-radius: 16px;
	}
`;
