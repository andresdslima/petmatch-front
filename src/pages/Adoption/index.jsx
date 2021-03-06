import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdoptionForm from '../../components/AdoptionForm';
import PeopleReview from '../../components/Section/PeopleReview';
import CardPostsContainer from '../../components/Card-Posts-Container';
import Banner from '../../components/Banner';

const Matches = () => {
	return (
		<>
			<Header />
			<Banner />
			<AdoptionForm />
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default Matches;
