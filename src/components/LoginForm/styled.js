import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SBackground = styled.div`
	background-color: #f76f34;
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

	@media only screen and (max-width: 500px) {
		display: none;
	}

	@media only screen and (min-width: 1200px) {
		width: 40%;
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

export const SGroup = styled(Form.Group)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0;
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

	&:hover {
		border: 1px solid #f76f34;
	}

	@media only screen and (max-width: 900px) {
		font-size: 15px;
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

	&:hover,
	&:focus {
		background-color: ${props =>
			props.type === 'submit' ? '#F76F34' : '#8D73E4'};
		cursor: pointer;
		color: #fdfdfd;
		opacity: 0.8;
	}
`;

export const SLink = styled(Link)`
	color: #404145;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	font-style: normal;

	&:hover,
	&:focus {
		color: #0075ff;
	}

	@media only screen and (max-width: 500px) {
		font-size: 13px;
	}
`;

export const SFooter = styled.footer`
	background-color: #f76f34;
	width: 100%;
	display: flex;
	justify-content: flex-end;

	img {
		width: 8%;
		margin: 1vh 10%;

		@media only screen and (max-width: 500px) {
			width: 15%;
		}
	}
`;

export const SHeader = styled.header`
	background-color: #f76f34;
	width: 100%;
	padding-top: 3vh;
	display: flex;
	justify-content: flex-end;

	img {
		width: 8%;
		margin: 1vh 30%;

		@media only screen and (max-width: 500px) {
			width: 15%;
			margin: 1vh 70%;
		}

		@media only screen and (min-width: 1200px) {
			margin: 1vh 50%;
		}
	}
`;

export const SLabel = styled(Form.Label)`
	display: none;
`;
