import React from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import StepByStepAdoption from '../../components/StepByStepAdoption';

const Home = () => {
    return (
        <>
           <Header />
            <ImagesCarousel />
            <StepByStepAdoption />
            <Footer />
        </>
    );
}

export default Home;