import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import CardCategory from '../../components/CardCategory';

const Home = () => {
    return (
        <>
           <Header />
            <ImagesCarousel />
            <CardCategory />
            <Footer />
        </>
    );
}

export default Home;