import Header from "../conponents/ui/Header"
import AboutUsSection from "../conponents/ui/AboutUsSection"
import WorkSection from "../conponents/ui/WorkSection"
import AboutUsSlider from "../conponents/ui/AboutUsSlider"
import GetStartedCard from "../conponents/ui/GetStartedCard"
import {BlogSection4Cards} from "../conponents/ui/BlogSection"
import Footer from "../conponents/ui/Footer"
const Home = () => {
  return (
    <div>
      <Header activeIndex={0} />
      <AboutUsSection />
      <WorkSection />
      <AboutUsSlider />
      <GetStartedCard />
      <BlogSection4Cards />
      <Footer />
    </div>
  )
}

export default Home
