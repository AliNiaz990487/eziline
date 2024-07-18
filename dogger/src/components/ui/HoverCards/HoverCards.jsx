import Image1 from "../../../assets/images/dogger_img_sm_3.jpg"
import Image2 from "../../../assets/images/dogger_img_sm_1.jpg"
import Image3 from "../../../assets/images/dogger_img_sm_2.jpg"
import HoverCard from "../HoverCard/HoverCard"

const HoverCards = () => {
  return (
    <section className="container">
        <HoverCard aos1="fade-left" aos2="fade-right" image={Image1} title="Love & Care" buttonLabel="Read More" text="Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
        <HoverCard aos1="fade-right" aos2="fade-left" image={Image2} title="Fearsome" buttonLabel="Read More" text="Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." reverse/>
        <HoverCard aos1="fade-left" aos2="fade-right" image={Image3} title="Beautiful" buttonLabel="Read More" text="Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
    </section>
  )
}

export default HoverCards
