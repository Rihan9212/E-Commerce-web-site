import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatesCollection from "../components/LatesCollection"
import Newsletter from "../components/Newsletter"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatesCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home