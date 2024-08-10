import Nav from '../conponents/ui/Nav'
import { Hero2 } from "../conponents/ui/Hero"
import { BlogSection8Cards } from '../conponents/ui/BlogSection'
import Footer from '../conponents/ui/Footer'




const Blog = () => {
  return (
    <div>
      <Nav activeIndex={3}/>
      <Hero2 mainLabel="Blog" label1="Blog" />
      <div className="tw-py-16"></div>
      <BlogSection8Cards />
      <Footer />
    </div>
  )
}

export default Blog
