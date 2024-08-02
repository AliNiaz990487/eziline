import React from 'react'
import { Navbar2 } from '../../components/ui/Nav/Nav'
import LocationAndSocial from '../../components/ui/LocationAndSocial/LocationAndSocial'
import Home2Carousel from '../../components/ui/Home2Carousel/Home2Carousel'
import ServiceCards from '../../components/ui/ServiceCards/ServiceCards'
import Stats from "../../components/ui/Stats/Stats";
import Specialization from "../../components/ui/Specialization/Specialization";
import RecentProjects1 from "../../components/ui/RecentProjects1/RecentProjects1";
import HappyClients from "../../components/ui/HappyClients/HappyClients";
import NewsLatter from "../../components/ui/NewsLatter/NewsLatter"
import RecentProjects2 from '../../components/ui/RecentProjects2/RecentProjects2';
import Footer from "../../components/ui/Footer/Footer";

const Home2 = () => {
    return (
        <div>
            <LocationAndSocial />
            <Navbar2 />
            <Home2Carousel />
            <ServiceCards />
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

export default Home2
