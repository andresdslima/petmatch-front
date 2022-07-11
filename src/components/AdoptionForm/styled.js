import styled from 'styled-components';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ContainerForm = styled(Container)`
	display: grid;
	row-gap: 15px;

	@media only screen and (max-width: 500px) {
		display: flex !important;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const Label = styled(Form.Label)`
	color: #141518;
	font-size: max(1vw, 14px);
	font-weight: 600;
	margin: 0;
`;

export const FormItemSelect = styled(Form.Select)`
	width: 22vw;
	background-color: #f7f8ff;
	border: 1px solid #d5d7db !important;
	font-size: 14px;
	color: #606266;
	box-shadow: none !important;

	@media only screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const SelectOption = styled.option`
	font-size: 14px;
	color: #606266;
`;

export const InputContainer = styled(Form.Group)`
	height: 77.5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;

	small {
		color: #f00;
		padding: 0 !important;
		margin: 0 !important;
		font-weight: 500;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const SearchButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 18vw;
	height: 3.54vw;
	background-color: #8d73e4 !important;
	color: #fff;
	font-size: 21px;
	font-weight: 600;
	box-shadow: none !important;

	&:hover {
		background-color: #fdfdfd !important;
		border: #fdfdfd;
		color: #000;
	}

	@media only screen and (max-width: 900px) {
		width: 27vw;
		height: 5.31vw;
		font-size: 16px;
	}

	@media only screen and (max-width: 500px) {
		width: 36vw;
		height: 7.08vw;
		font-size: 14px;
	}
`;

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

export const SForm = styled(Form)`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5vh;

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
	padding: 9px 5px;
	border: 1px solid #babdc2;
	border-radius: 4px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	margin: 0;
	box-sizing: border-box;
	position: relative;
	width: 22vw !important;

	&:hover {
		border: 1px solid #fc895e;
	}

	@media only screen and (max-width: 1200px) {
		width: 70%;
	}

	@media only screen and (max-width: 900px) {
		width: 100%;
	}

	@media only screen and (max-width: 500px) {
		width: 100% !important;
		margin-bottom: 1.5vh;
	}
`;

export const SButton = styled(Button)`
	width: 200px;
	border: 1px solid #8d73e4;
	border-radius: 4px;
	background-color: ${props =>
		props.type === 'submit' ? '#8D73E4' : '#FDFDFD'};
	padding: 10px 5px;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 16px;
	margin: 1vh 0;
	text-align: center;
	opacity: 1;
	color: ${props => (props.type === 'submit' ? '#FDFDFD' : '#8D73E4')};
	margin: 0 1vw;

	&:hover,
	&:focus {
		opacity: 0.7;
		cursor: pointer;
		background-color: ${props =>
			props.type === 'submit' ? '#8D73E4' : '#FDFDFD'};
		color: ${props => (props.type === 'submit' ? '#FDFDFD' : '#8D73E4')};
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

export const NumberOfSteps = styled.div`
	display: flex;
	justify-content: center;
	gap: 200px;

	@media only screen and (max-width: 900px) {
		gap: 150px;
	}

	@media only screen and (max-width: 500px) {
		display: none;
	}
`;

export const StepNumberOne = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	font-size: 12px;
	font-weight: 600;
	color: #fdfdfd;
	background-color: ${props =>
		props.active <= props.steps ? '#fc895e' : '#d5d7db'};
	border-radius: 100%;
	padding: 2.1%;
	z-index: 99;

	&::after {
		content: '${props => props.text}';
		color: ${props => (props.active <= props.steps ? '#fc895e' : '#fff')};
	}
`;

export const STitle = styled.h5`
	text-align: center;
`;

export const StepNumberTwo = styled(StepNumberOne)`
	&::after {
		width: 20vw;
		border-bottom: ${props =>
			props.active <= props.steps ? '1px solid #fc895e' : '1px solid #d5d7db'};
		content: '${props => props.text}';
		color: ${props => (props.active <= props.steps ? '#fc895e' : '#fff')};
		position: absolute;
		margin-left: 56vw;
		margin-bottom: 2vh;
		transform: translateX(-164px);
		text-align: center;
	}

	@media only screen and (min-width: 1200px) {
		&::after {
			width: 14.5vw;
			margin-right: 25vw;
			transform: translateX(-89px);
		}
	}

	@media only screen and (min-width: 1400px) {
		&::after {
			width: 15vw;
			margin-right: 27vw;
			transform: translateX(-89px);
		}
	}

	@media only screen and (max-width: 900px) {
		&::after {
			width: 19.5vw;
			margin-left: 46.5vw;
			transform: translateX(-89px);
		}
	}
`;

export const StepNumberThree = styled(StepNumberTwo)`
	&::after {
		width: auto;
		border: none;
		margin-left: 43vw;
		margin-bottom: 0;
	}

	@media only screen and (min-width: 1200px) {
		&::after {
			margin-left: 47vw;
		}
	}

	@media only screen and (max-width: 900px) {
		&::after {
			margin-left: 35vw;
		}
	}
`;

export const SSignature = styled(SInput)`
	border: none;
	border-bottom: 1px solid #babdc2;

	&:hover,
	&:focus {
		border: none;
		border-bottom: 1px solid #fc895e;
	}
`;

export const CheckboxContainer = styled(Form.Group)`
	height: 77.5px;
	display: flex;
	justify-content: center;
	align-items: center;

	small {
		color: #f00;
		font-weight: 500;
	}
`;

export const Checkbox = styled(Form.Check)`
	height: 38px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-size: 14px;
	color: #606266;
	margin-left: 1%;

	& input {
		box-shadow: none !important;
		border: 1px solid #d5d7db !important;
		background-color: #f7f8ff;
	}

	& label {
		font-size: (0.73vw, 10px);
	}
`;

export const SDiv = styled.div`
	border: 1px solid #000;
	border-radius: 5px;
	padding: 1.5rem;
	text-align: justify;

	span {
		font-size: 12px;
	}
`;
