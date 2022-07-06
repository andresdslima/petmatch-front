import React from "react";
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import PageUnderConstruction from "../../components/PageUnderConstruction";
import PeopleReview from '../../components/Section/PeopleReview';
import Footer from '../../components/Footer'

const PageConstruction = () => {
	return (
		<>
			<Header />
			<Banner />
            <PageUnderConstruction />
			<PeopleReview />
			<Footer />
		</>
	);
};

export default PageConstruction;