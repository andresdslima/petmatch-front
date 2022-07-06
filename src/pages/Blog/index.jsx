import BlogMainContent from "../../components/BlogMainContent"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import PeopleReview from "../../components/Section/PeopleReview"

const Blog = () => {
    return (
        <>
            <Header />
            <Banner />
            <BlogMainContent />
            <PeopleReview />
            <Footer />
        </>
    )
}

export default Blog