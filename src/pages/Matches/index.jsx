import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MatchesForm from '../../components/MatchesForm';
import PeopleReview from '../../components/Section/PeopleReview';
import CardPostsContainer from '../../components/Card-Posts-Container';

const Matches = () => {
	return (
		<>
			<Header />
			
			<MatchesForm />
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default Matches;
