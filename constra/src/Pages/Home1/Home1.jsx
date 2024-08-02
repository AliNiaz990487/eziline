import LocationAndSocial from '../../components/ui/LocationAndSocial/LocationAndSocial'
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Nav from '../../components/ui/Nav/Nav'
import HeaderCarousel from '../../components/ui/HeaderCarousel/HeaderCarousel'
import Features from "../../components/ui/Features/Features"
import Stats from "../../components/ui/Stats/Stats"
import Specialization from "../../components/ui/Specialization/Specialization"
import RecentProjects1 from '../../components/ui/RecentProjects1/RecentProjects1.jsx'
import HappyClients from "../../components/ui/HappyClients/HappyClients"
import NewsLatter from '../../components/ui/NewsLatter/NewsLatter.jsx'
import RecentProjects2 from '../../components/ui/RecentProjects2/RecentProjects2.jsx'
import Footer from "../../components/ui/Footer/Footer.jsx"
const Home1 = () => {
  return (
    <div className="">
      <LocationAndSocial />
      <LogoAndContact />
      <Nav />
      <HeaderCarousel />
      <Features />
      <Stats />
      <Specialization />
      <RecentProjects1 />
      <HappyClients />
      <NewsLatter />
      <RecentProjects2 />
      <Footer />
    </div>
  )
}

export default Home1
