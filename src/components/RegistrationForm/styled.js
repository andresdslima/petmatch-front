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
	justify-content: center;
	align-items: center;
	gap: 0;
`;

export const SContainer = styled.div`
	background-color: #fdfdfd;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 80%;
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
	width: 50%;
	height: 100%;

	@media only screen and (min-width: 1200px) {
		width: 40%;
	}

	@media only screen and (max-width: 500px) {
		display: none;
	}
`;

export const SForm = styled(Form)`
	width: 50%;
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
		width: 20%;

		&.icon {
			width: 7%;
			margin-left: -20px;
			position: relative;
		}

		@media only screen and (max-width: 500px) {
			width: 30%;
		}
	}

	@media only screen and (min-width: 1200px) {
		margin-right: 10%;
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
	width: 50%;

	&:hover {
		border: 1px solid #f76f34;
	}

	@media only screen and (max-width: 900px) {
		font-size: 15px;
		width: 60%;
	}

	@media only screen and (max-width: 500px) {
		font-size: 15px;
		width: 100%;
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
	justify-content: flex-end;
	align-items: center;

	div {
		width: 20%;
		margin-left: 15vw;

		@media only screen and (min-width: 1200px) {
			margin: 0 10% 0 10%;
		}

		@media only screen and (max-width: 500px) {
			margin: 0 15% 0 10%;
		}
	}

	img {
		width: 40%;
		margin: 1vh 10%;

		&.logo {
			width: 6%;

			@media only screen and (max-width: 500px) {
				width: 10%;
				margin-right: 0;
			}
		}

		@media only screen and (max-width: 500px) {
			width: 75%;
		}
	}
`;

export const SHeader = styled.header`
	background-color: #fdfdfd;
	width: 100%;
	padding-top: 3vh;
	display: flex;
	justify-content: flex-end;

	img {
		width: 8%;
		margin: 2vh 30%;

		@media only screen and (min-width: 1200px) {
			margin: 5vh 45% 2vh 0;
		}

		@media only screen and (max-width: 500px) {
			width: 15%;
			margin: 0vh 70% 10vh 0;
		}
	}
`;

export const SLabel = styled(Form.Label)`
	display: none;
`;
