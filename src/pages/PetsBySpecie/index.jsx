import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import ListPetsBySpecie from '../../components/ListPetsBySpecie';
import PeopleReview from '../../components/Section/PeopleReview';
import CardPostsContainer from '../../components/Card-Posts-Container';

const PetsBySpecie = () => {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <ListPetsBySpecie />
      <PeopleReview />
        <CardPostsContainer />
      <Footer />
    </>
  );
};

export default PetsBySpecie;