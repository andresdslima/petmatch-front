import { Link } from 'react-router-dom';
import { Card, CardImg, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const RowContainer = styled(Row)`
	display: flex;
	justify-content: flex-start;
    gap: 13px;

	@media only screen and (max-width: 900px) {
        gap: 0px;
	}
`;

export const Column = styled(Col)`
	width: 16.5vw;
    margin-bottom: 2vw;

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

export const MatchIconContainer = styled.div`
	position: absolute;
	bottom: 17.5%;
	right: 0%;
	display: flex;
	flex-direction: column;
	align-items: center;

    @media only screen and (max-width: 900px) {
		bottom: 19%;
	}

	@media only screen and (max-width: 500px) {
        bottom: 30%;
	}
`;

export const MatchIconDiv = styled.div`
	background-color: #f76f34;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 5px solid #fff;
	border-radius: 100%;
	-webkit-clip-path: circle(50% at 50% 50%);
	clip-path: circle(50% at 50% 50%);

    @media only screen and (max-width: 900px) {
		width: 46.5px;
        height: 46.5px;
	}

	@media only screen and (max-width: 500px) {
        width: 37.22px;
        height: 37.22px
	}
`;

export const MatchIcon = styled.img`
	width: 50%;
`;

export const MatchPercent = styled.span`
	font-size: 12px;
	line-height: 14px;
	font-weight: 600;
	color: #f76f34;
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
