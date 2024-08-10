import Nav from '../conponents/ui/Nav'
import { Hero2 } from "../conponents/ui/Hero"
import WorkSection from '../conponents/ui/WorkSection'
import Footer from '../conponents/ui/Footer'




const Work = () => {
  return (
    <div>
      <Nav activeIndex={2} />
      <Hero2 mainLabel="Work" label1="Work" />
      <div className="tw-py-16"></div>
      <WorkSection />
      <Footer />
    </div>
  )
}

export default Work
