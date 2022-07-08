import AboutUsPageMainContent from '../../components/AboutUsPageMainContent';
import AboutUsSection from '../../components/Section/AboutUsSection';
import Header from '../../components/Header';
import PeopleReview from '../../components/Section/PeopleReview';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import CardPostsContainer from '../../components/Card-Posts-Container';

const About = () => {
	return (
		<>
			<Header />
			<Banner />
			<AboutUsPageMainContent />
			<AboutUsSection />
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default About;
