import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonContainer = styled(Container)`
display: flex;
justify-content: center;
`

export const MorePetsButton = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 2.5vw;
	height: max(2.3vw, 35px);
	text-align: center;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: 1rem;
	background-color: #8D73E4;
	color: #fff;
	border-radius: 0.25rem;
	transition: all 0.3s ease-in-out;

	&:hover {
		opacity: 0.8;
		color: #fdfdfd;
	}

	@media (min-width: 1200px) {
		width: 10vw;
	}

	@media (max-width: 1100px) {
		width: 15vw;
	}

	@media (max-width: 768px) {
		width: 20vw;
		font-size: 0.8rem;

		&:hover {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 500px) {
		width: 28vw;
		margin-top: 5vw;
	}
`;
