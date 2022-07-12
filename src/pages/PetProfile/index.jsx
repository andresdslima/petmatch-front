import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import PetPageProfile from '../../components/PetPageProfile';
import MatchsMainContent from '../../components/MatchsMainContent';
import MorePetsButton from '../../components/MorePetsButton';

const PetProfile = () => {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <PetPageProfile />
      <MatchsMainContent />
			<MorePetsButton />
      <Footer />
    </>
  );
};

export default PetProfile;
