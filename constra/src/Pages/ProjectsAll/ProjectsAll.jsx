import LocationAndSocial from "../../components/ui/LocationAndSocial/LocationAndSocial"
import LogoAndContact from "../../components/ui/LogoAndContact/LogoAndContact"
import Navbar from "../../components/ui/Nav/Nav";
import Header from "../../components/ui/Header/Header"
import RecentProjects1 from "../../components/ui/RecentProjects1/RecentProjects1";
import Footer from "../../components/ui/Footer/Footer"

const ProjectsAll = () => {
    return (
        <div>
            <LocationAndSocial />
            <LogoAndContact />
            <Navbar />
            <Header title="PROJECT" tab1="PROJECT" tab2="ALL PROJECTS" />
            <RecentProjects1 />
            <Footer />
        </div>
    )
}

export default ProjectsAll
