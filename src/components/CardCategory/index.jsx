import React from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import dogSmile from '../../assets/dogSmile.png';
import catSerious from '../../assets/catSerious.png';
import birdModel from '../../assets/birdModel.png';
import Fish from '../../assets/Fish.svg';
import reptiles from '../../assets/reptiles.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled';

const CardCategory = () => {
	const settings = {
		dots: false,
		infinite: false,
		centerMode: false,
		speed: 500,
		slidesToScroll: 3,
		slidesToShow: 3,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<S.StyledBackground>
			<S.ContainerCategory>
				<S.TitleCategory>Categorias</S.TitleCategory>
				<S.ContainerCardsCategory>
					<Slider {...settings}>
						<S.LinkContainer to="/petsbyspecie/Cachorro">
							<S.CardCategory>
								<S.ContainerImgCategory>
									<S.ImgCategory src={dogSmile} />
								</S.ContainerImgCategory>
								<Card.Body>
									<Card.Title>Cachorros</Card.Title>
								</Card.Body>
							</S.CardCategory>
						</S.LinkContainer>
						<S.LinkContainer to="/petsbyspecie/Gato">
							<S.CardCategory>
								<S.ContainerImgCategory>
									<S.ImgCategory src={catSerious} />
								</S.ContainerImgCategory>
								<Card.Body>
									<Card.Title>Gatos</Card.Title>
								</Card.Body>
							</S.CardCategory>
						</S.LinkContainer>
						<S.LinkContainer to="/petsbyspecie/Ave">
							<S.CardCategory>
								<S.ContainerImgCategory>
									<S.ImgCategory src={birdModel} />
								</S.ContainerImgCategory>
								<Card.Body>
									<Card.Title>Aves</Card.Title>
								</Card.Body>
							</S.CardCategory>
						</S.LinkContainer>
						<S.LinkContainer to="/petsbyspecie/Réptil">
							<S.CardCategory>
								<S.ContainerImgCategory>
									<S.ImgCategory src={reptiles} />
								</S.ContainerImgCategory>
								<Card.Body>
									<Card.Title>Répteis</Card.Title>
								</Card.Body>
							</S.CardCategory>
						</S.LinkContainer>
						<S.LinkContainer to="/petsbyspecie/Peixe">
							<S.CardCategory>
								<S.ContainerImgCategory>
									<S.ImgCategory src={Fish} />
								</S.ContainerImgCategory>
								<Card.Body>
									<Card.Title>Peixes</Card.Title>
								</Card.Body>
							</S.CardCategory>
						</S.LinkContainer>
					</Slider>
				</S.ContainerCardsCategory>
			</S.ContainerCategory>
		</S.StyledBackground>
	);
};

export default CardCategory;
