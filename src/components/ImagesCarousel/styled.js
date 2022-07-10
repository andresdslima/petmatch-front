import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Carousel } from 'react-bootstrap';

export const ContainerContent = styled(Container)`
	display: flex;
	justify-content: flex-start;
	gap: 3vw;
	align-items: center;
	flex-direction: column;
`;

export const ContainerCarousel = styled(Carousel)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	box-sizing: border-box;

	& .carousel-indicators {
		display: none;
	}

	& .carousel-caption {
		bottom: -1rem;
		text-align: initial;
		left: 3%;
	}

	& .carousel-control-next,
	.carousel-control-prev {
		opacity: 0;
	}

	& .carousel-control-next:hover,
	.carousel-control-prev:hover {
		opacity: 0.5;
	}

	@media (max-width: 1000px) {
		width: 90vw;
		height: 25vw;
	}

	@media (max-width: 600px) {
		margin-top: 0;
		height: 30vw;
	}
`;

export const ImageCarousel = styled.img`
	width: 100%;
	height: 100%;

	@media (max-width: 768px) {
		height: 25vw;
	}
	@media (max-width: 468px) {
		height: 30vw;
	}
`;

export const Text = styled.h3`
	font-family: 'Inter';
	color: #fdfdfd;
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 2rem;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.56);

	@media (max-width: 1000px) {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	@media (max-width: 468px) {
		font-size: 0.75rem;
		line-height: 1rem;
	}
`;

export const ContainerDisplayButton = styled.div`
	display: ${props => props.display};
`;

export const ContainerButton = styled.nav`
	display: flex;
	justify-content: space-around;
	width: 34vw;

	@media (max-width: 1000px) {
		gap: 5vw;
	}

	@media (max-width: 768px) {
		width: 50vw;
	}

	@media (max-width: 468px) {
		gap: 3.5vw;
		width: 65vw;
	}
`;

export const ButtonLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 12.5vw;
	height: 5vw;
	text-align: center;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: 1rem;
	background-color: ${props => props.color};
	color: #fff;
	border-radius: 0.25rem;
	transition: all 0.5s ease-in-out;

	&:hover {
		opacity: 0.8;
		color: #fdfdfd;
	}

	@media (max-width: 768px) {
		width: 25vw;
		height: 6vw;
		font-size: 1rem;

		&:hover {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 468px) {
		width: 30vw;
		height: 8vw;
	}
`;
