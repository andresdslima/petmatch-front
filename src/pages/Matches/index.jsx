import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MatchesForm from '../../components/MatchesForm';
import PeopleReview from '../../components/Section/PeopleReview';
// import MatchsMainContent from '../../components/MatchsMainContent';
import CardPostsContainer from '../../components/Card-Posts-Container';
import Banner from '../../components/Banner';
import ListAllPets from '../../components/ListAllPets';

const Matches = () => {

	const data = JSON.parse(localStorage.getItem('data'));

	const isLogged = () => {
		if (!data) return false;

		return true;
	};

	return (
		<>
			<Header />
			<Banner />
			{isLogged()? (<MatchesForm />) : (<ListAllPets />)}
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default Matches;
