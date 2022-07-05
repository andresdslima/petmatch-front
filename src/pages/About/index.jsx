import AboutUsPageMainContent from "../../components/AboutUsPageMainContent"
import AboutUsSection from "../../components/Section/AboutUsSection"
import Header from "../../components/Header"
import ImagesCarousel from "../../components/ImagesCarousel"
import AboutBanner from "../../components/Section/AboutBanner"
import PeopleReview from "../../components/Section/PeopleReview"
import Footer from "../../components/Footer"

const About = () => {
    return (
        <>
            <Header />
            <AboutBanner />
            <AboutUsPageMainContent />
            <AboutUsSection />
            <PeopleReview />
            <Footer />
        </>
    )
}

export default About