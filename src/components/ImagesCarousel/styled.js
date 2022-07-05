import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

export const ContainerContent = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 10vw;
	align-items: center;
	flex-direction: column;

	@media (max-width: 1000px) {
		gap: 4vw;
	}

	@media (max-width: 600px) {
		gap: 4vw;
	}
`;

export const ContainerCarousel = styled(Carousel)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68vw;
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
		width: 75vw;
		height: 25vw;
	}

	@media (max-width: 600px) {
		width: 80vw;
		margin-top: 0;
		height: 20vw;
	}
`;

export const ImageCarousel = styled.img`
	width: 100%;
	height: 100%;
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

export const ContainerButton = styled.nav`
	display: flex;
	justify-content: space-around;
	width: 34vw;

	@media (max-width: 1000px) {
		gap: 5vh;
	}

	@media (max-width: 600px) {
		gap: 3vh;
	}
`;

export const ButtonLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 15.6vw;
    height: 6.1vh;
    text-align: center;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1rem;
	background-color: ${(props) => props.color};
    color: #FFF;
    border-radius: 4px;
    transition: all 0.5s ease-in-out;

	&:hover {
		opacity: 0.8;
		color: #fdfdfd;
	}

	@media (max-width: 700px) {
		width: 16vw;
		height: 4vh;
		font-size: 0.5rem;

		&:hover {
			font-size: 0.8rem;
		}
	}
`;
