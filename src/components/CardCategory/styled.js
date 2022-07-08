import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const StyledBackground = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ContainerCategory = styled.div`
	height: 100%;
	width: 100%;
	margin: 7vw 0;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 1024px) {
		width: 75vw;
	}

	@media (max-width: 600px) {
		width: 80vw;
	}
`;

export const TitleCategory = styled.h3`
	margin-bottom: 1.4vw;
	font-size: 1.3rem;
	font-weight: 600;
	line-height: 1.5rem;
`;

export const ContainerCardsCategory = styled.nav`
	box-sizing: border-box;
	width: 100%;

	& .slick-slider {
		width: 100%;

        & .slick-next:before{
            color: #F76F34;
        }
        & .slick-prev:before{
            color: #F76F34;
        }

        & .slick-list {
            padding: 0.5rem 0;
        }
    }
`;

export const LinkContainer = styled(Link)`
	text-decoration: none;
	text-align: center;
`;

export const CardCategory = styled(Card)`
	border-radius: 1.04vw;
	width: 15.8vw;
	height: 100%;
	margin-right: 1.3vw;
	box-shadow: 0 0.26vw 0.26vw rgba(159, 159, 159, 0.25);
	transition: all 0.5s ease-in-out;

	&:hover {
		width: 20vw;
	}

	@media (max-width: 468px) {
		width: 30vw;
		border-radius: 2vw;

		&:hover {
			width: 30vw;
		}
	}

	& .card-body {
		border-radius: 0 0 1.04vw 1.04vw;
		height: 2.6vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5vw 0;

		& .card-title.h5 {
			font-size: 1.3rem;
			color: #141518;
			margin-bottom: 0;

			@media (max-width: 1024px) {
				font-size: 1rem;
			}

			@media (max-width: 768px) {
				font-size: 0.8rem;
			}
			@media (max-width: 468px) {
				font-size: 0.6rem;
			}
		}
	}
`;
