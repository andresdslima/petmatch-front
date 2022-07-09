import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FooterBackground = styled(Navbar)`
	background-color: #7355d3;
	margin-top: 5vw;
`;

export const FooterContainer = styled(Container)`
	height: max(15vw, 150px);
	align-items: flex-end !important;
`;

export const VetorImage = styled.img`
	height: max(7.2vw, 95px);
	width: max(7.5vw, 100px);

	@media only screen and (max-width: 991px) {
		display: none;
	}
`;

export const FooterCenterContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: max(1.4vw, 10px);
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const NavLinks = styled(Nav)`
	gap: 40px;
	margin: 10px auto !important;
	flex-direction: row;

	@media only screen and (max-width: 500px) {
		gap: 20px;
	}
`;

export const ButtonLink = styled(Link)`
	text-decoration: none;
	font-size: 14px;
	font-weight: 600;
	color: #f8f9fa;
	outline: 1px solid #d5d7db;
	outline-offset: -1px;
	background-color: #8d73e4;
	width: max(8vw, 120px);
	height: max(2.3vw, 35px);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

	&:hover {
		color: #e7e1fb;
		background-color: #f76f34;
	}

	@media only screen and (max-width: 500px) {
		width: 100px;
	}
`;

export const Text = styled.span`
	color: #f5f3fc;
	font-size: 14px;

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const BoldText = styled.span`
	color: #f5f3fc;
	font-size: 14px;
	font-weight: 600;
`;
