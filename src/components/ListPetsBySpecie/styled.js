import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const RowContainer = styled(Row)`
	display: flex;
	justify-content: center;
	gap: 13px;

	@media only screen and (max-width: 1100px) {
		gap: 0px;
	}
`;

export const Column = styled(Col)`
	width: 16.5vw;
	margin-bottom: 1.7vw;

	@media only screen and (max-width: 1100px) {
		width: 23%;
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

	@media only screen and (min-width: 500px) {
		&:hover {
			outline: 2px solid #f88b5c !important;
		}
	}
`;

export const CardImage = styled(CardImg)`
	width: 100%;
	height: 11.76vw;
	object-fit: cover;
	border-radius: 15px 15px 0 0;

	@media only screen and (max-width: 1100px) {
		height: 15vw;
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

	@media (max-width: 768px) {
		font-size: 2.5vw;
	}

	@media (max-width: 468px) {
		font-size: 3.5vw;
	}
`;

export const CardText = styled(Card.Text)`
	font-size: 12px;
	color: #404145;

	@media (max-width: 768px) {
		font-size: 2vw;
	}

	@media (max-width: 468px) {
		font-size: 3vw;
	}
`;

export const TitleBackground = styled.div`
	background-color: #fc895e;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h3`
	font-size: max(1.45vw, 16px);
	font-weight: 600;
`;

export const PetsContainer = styled(Container)`
	margin: 5vw auto 0 auto;
`;

export const MatchIconDiv = styled.div`
	background-color: #f76f34;
	width: 40px !important;
	height: 40px !important;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 4px solid #fff;
	border-radius: 100%;
	-webkit-clip-path: circle(50% at 50% 50%);
	clip-path: circle(50% at 50% 50%);

	@media only screen and (max-width: 1100px) {
		width: 46.5px;
		height: 46.5px;
	}

	@media only screen and (max-width: 500px) {
		width: 37.22px;
		height: 37.22px;
	}
`;

export const GenderIconDiv = styled(MatchIconDiv)`
	background-color: ${props => props.color};
	border: none;
	width: 35px !important;
	height: 35px !important;
`;

export const GenderIconContainer = styled.div`
	position: absolute;
	top: 0%;
	left: 0%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FemaleGenderIcon = styled(BsGenderFemale)`
	font-size: 20px;
	color: #fff;
`;

export const MaleGenderIcon = styled(BsGenderMale)`
	font-size: 20px;
	color: #fff;
`;
