import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const ContainerBanner = styled(Carousel)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68vw;
    height: 100%;
    margin-top: 5vw;
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
		display: none;
	}

	@media (max-width: 1000px) {
		width: 75vw;
		margin-top: 5vw;
		height: 25vw;
	}

	@media (max-width: 600px) {
		width: 80vw;
		margin-top: 0;
		height: 20vw;
	}
`;

export const ImageBanner = styled.img`
	width: 100%;
	height: 100%;
`;

export const TextBanner = styled.h3`
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
		font-size: .75rem;
		line-height: 1rem;
	}
`;