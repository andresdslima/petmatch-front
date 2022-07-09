import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import twoDogs from '../../assets/twoDogs.png'
import oneDog from '../../assets/oneDog.png'
import wrappedCat from '../../assets/wrappedCat.png'
import { useLocation } from 'react-router-dom';
import * as S from './styled'

const ImagesCarousel = () => {
  const location = useLocation();
  const petId = location?.search.split('?')[1];
  return (
		<S.ContainerContent>
			<S.ContainerCarousel>
				<Carousel.Item interval={3000}>
					<S.ImageCarousel src={twoDogs} alt="Dois cachorros" />
					<Carousel.Caption>
						<S.Text>
							AQUI A ADOÇÃO É COM
							<br /> MUITA RESPONSABILIDADE!
						</S.Text>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<S.ImageCarousel src={wrappedCat} alt="Gato coberto com lençol" />
					<Carousel.Caption>
						<S.Text>
							ADOÇÃO
							<br />
							NÃO É BRINCADEIRA!
						</S.Text>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<S.ImageCarousel src={oneDog} alt="Cachorro" />
					<Carousel.Caption>
						<S.Text>
							ADOTE COM A PETMATCH
							<br />
							SEU MELHOR AMIGO ESTÁ AQUI
						</S.Text>
					</Carousel.Caption>
				</Carousel.Item>
			</S.ContainerCarousel>
			<S.ContainerDisplayButton
				display={
					(location?.search === `?${petId}` && 'none') 
          ||
					(location?.pathname === '/petprofile' &&'none')
				}
			>
				<S.ContainerButton>
					<S.ButtonLink color={'#8D73E4'} exact to="/">
						Quero Adotar
					</S.ButtonLink>
					<S.ButtonLink color={'#F76F34'} exact to="/">
						Quero Doar
					</S.ButtonLink>
				</S.ContainerButton>
			</S.ContainerDisplayButton>
		</S.ContainerContent>
	);
};

export default ImagesCarousel;
