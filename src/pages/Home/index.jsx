import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import CardCategory from '../../components/CardCategory';
import Container from '../../components/Container'


const Home = () => {
    return (
			<>
				<Header />
				<Container>
					<ImagesCarousel />
					<CardCategory />
				</Container>
				<Footer />
			</>
		);
}

export default Home;