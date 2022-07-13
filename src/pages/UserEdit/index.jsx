import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PeopleReview from '../../components/Section/PeopleReview';
import CardPostsContainer from '../../components/Card-Posts-Container';
import ImagesCarousel from '../../components/ImagesCarousel';
// import GiveForAdoptionForm from '../../components/GiveForAdoptionForm';
import UserEditForm from '../../components/UserEditForm';

const UserEdit = () => {
	return (
		<>
			<Header />
			<ImagesCarousel />
			<UserEditForm />
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default UserEdit;
