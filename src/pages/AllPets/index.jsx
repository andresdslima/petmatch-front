import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import PeopleReview from '../../components/Section/PeopleReview';
import CardPostsContainer from '../../components/Card-Posts-Container';
import ListAllPets from '../../components/ListAllPets';

const AllPets = () => {
	return (
		<>
			<Header />
			<ImagesCarousel />
			<ListAllPets />
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default AllPets;
