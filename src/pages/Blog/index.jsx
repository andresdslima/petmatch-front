import BlogMainContent from "../../components/BlogMainContent"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import PeopleReview from "../../components/Section/PeopleReview"
import CardsPostContainer from "../../components/Card-Posts-Container"

const Blog = () => {
    return (
        <>
            <Header />
            <Banner />
            <BlogMainContent />
            <PeopleReview />
            <CardsPostContainer />
            <Footer />
        </>
    )
}

export default Blog