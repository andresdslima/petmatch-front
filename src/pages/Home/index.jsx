import React from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';

const Home = () => {
    return (
        <>
           <Header />
            <ImagesCarousel />
            <Footer />
        </>
    );
}

export default Home;