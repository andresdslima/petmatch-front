import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MatchesForm from '../../components/MatchesForm';
import PeopleReview from '../../components/Section/PeopleReview';
import MatchsMainContent from '../../components/MatchsMainContent';
import CardPostsContainer from '../../components/Card-Posts-Container';
import Banner from '../../components/Banner';

const Matches = () => {
	return (
		<>
			<Header />
			<Banner />
			<MatchesForm />

			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default Matches;
