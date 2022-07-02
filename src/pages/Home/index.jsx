import React from 'react';
import Container from '../../components/Container';
import ImagesCarousel from '../../components/ImagesCarousel';
import CardCategory from '../../components/CardCategory';

const Home = () => {
    return (
        <Container>
            <ImagesCarousel />
            <CardCategory />
        </Container>
    );
}

export default Home;