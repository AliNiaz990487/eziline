
import Hero from './Hero'
import Nav from './Nav'

const Header = ({activeIndex}) => {
  return (
    <div className="">
      <Nav activeIndex={activeIndex}/>
      <Hero />
    </div>
  )
}

export default Header
