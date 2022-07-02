import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SBackground = styled.div`
	background-color: #fdfdfd;
	margin: 0;
	width: 100vw;
	height: 100vh;
	max-width: 100%;
	max-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0;
`;

export const SContainer = styled.div`
	background-color: #fdfdfd;
	margin: 0;
	width: 100%;
	height: 100vh;
	max-width: 100%;
	max-height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

export const SImage = styled.img`
	width: 80%;
	height: 100%;

	@media only screen and (min-width: 1200px) {
		width: 60%;
	}

	@media only screen and (max-width: 500px) {
		display: none;
	}
`;

export const SForm = styled(Form)`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5vh;

	small {
		color: #f00;
		padding: 0;
		margin: 0;
		font-weight: 600;
	}

	img {
		width: 60%;
		margin: 10% 20%;

		@media only screen and (max-width: 500px) {
			width: 60%;
			margin: 20%;
			padding-left: 6%;
		}
	}

	@media only screen and (min-width: 1200px) {
		margin-right: 10%;
	}

	@media only screen and (max-width: 900px) {
		margin-right: 5%;
	}

	@media only screen and (max-width: 500px) {
		width: 100%;
		margin-right: 0;
	}
`;

export const SInput = styled(Form.Control)`
	text-align: center;
	padding: 5px;
	border: 1px solid #babdc2;
	border-radius: 4px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	margin: 0;
	box-sizing: border-box;
	position: relative;
	width: 55%;

	&:hover {
		border: 1px solid #f76f34;
	}

	@media only screen and (max-width: 1200px) {
		width: 70%;
	}

	@media only screen and (max-width: 900px) {
		width: 100%;
	}

	@media only screen and (max-width: 500px) {
		width: 60%;
	}
`;

export const SButton = styled(Button)`
	width: 200px;
	border: none;
	border-radius: 4px;
	background-color: ${props =>
		props.type === 'submit' ? '#F76F34' : '#8D73E4'};
	padding: 7px;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	margin: 1vh 0;
	text-align: center;
	opacity: 1;
	color: #fdfdfd;

	&:hover,
	&:focus {
		opacity: 0.8;
		cursor: pointer;
		background-color: ${props =>
			props.type === 'submit' ? '#F76F34' : '#8D73E4'};
	}
`;

export const SLink = styled(Link)`
	color: #404145;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	font-style: normal;
	text-decoration: none;

	&:hover,
	&:focus {
		color: #0075ff;
	}

	@media only screen and (max-width: 500px) {
		font-size: 13px;
	}
`;

export const SFooter = styled.footer`
	background-color: #fdfdfd;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 6%;

		@media only screen and (max-width: 500px) {
			width: 10%;
		}
	}
`;

export const SLabel = styled(Form.Label)`
	display: none;
`;
