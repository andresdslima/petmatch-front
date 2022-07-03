import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import StepByStepAdoption from '../../components/StepByStepAdoption';
import CardCategory from '../../components/CardCategory';
import CardMatches from '../../components/Cards/CardMatches';

const Home = () => {
	return (
		<>
			<Header />
			<ImagesCarousel />
			<CardCategory />
			<StepByStepAdoption />
			<CardMatches />
			<Footer />
		</>
	);
};

export default Home;
