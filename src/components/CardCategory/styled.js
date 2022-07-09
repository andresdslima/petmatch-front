import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const StyledBackground = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 5vw auto;
`;

export const ContainerCategory = styled.div`
	height: 100%;
	width: 100%;
	box-sizing: border-box;

	@media (max-width: 768px) {
		width: 75vw;
		height: 30vw;
	}

	@media (max-width: 468px) {
		width: 80vw;
		height: 35vw;
	}
`;

export const TitleCategory = styled.h3`
	margin-bottom: 1.4vw;
	font-size: 1.3rem;
	font-weight: 600;
	line-height: 1.5rem;
	text-align: start;
`;

export const ContainerCardsCategory = styled.nav`
	box-sizing: border-box;

	& .slick-slider {
		width: 100%;
		margin: 0 auto;

        & .slick-next:before{
            color: #F76F34;
        }
        & .slick-prev:before{
            color: #F76F34;
        }

		&.slick-track {
			width: 2000px !important;
		}

        & .slick-list {
            padding: 0.5rem 0;
        }

    }

	@media (max-width: 768px){
		height: 40vw;
	}
	@media (max-width: 468px){
		height: 45vw;
	}
`;

export const LinkContainer = styled(Link)`
	text-decoration: none;
	text-align: center;
`;

export const CardCategory = styled(Card)`
	border-radius: 1.04vw;
	position: relative;
	width: 18vw;
	border-width: 0;
	margin-right: 1.3vw;
	box-shadow: 0 0.26vw 0.26vw rgba(159, 159, 159, 0.25);
	transition: all 0.5s ease-in-out;
	box-sizing: border-box;


	& .card-body {
		border-radius: 0 0 1.04vw 1.04vw;
		height: 4.5vw;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1.5vw 0 0;

		& .card-title.h5 {
			font-size: 1.3vw;
			color: #141518;
			margin-bottom: 0;
			text-align: center;

			@media (max-width: 1024px) {
				font-size: 1.8vw;
			}

			@media (max-width: 768px) {
				font-size: 2vw;
			}
			@media (max-width: 468px) {
				font-size: 2.5vw;
			}
		}
	}
`;

export const ContainerImgCategory = styled.div`
	width: 100%;
	height: 8.91vw;
		
`;

export const ImgCategory = styled.img`
	object-fit: contain;
	border-radius: 1.04vw 1.04vw 0 0;
	width: 100%;
	
`;
