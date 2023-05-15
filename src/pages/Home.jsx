import AboutComp from "../components/AboutComp/AboutComp"
import CallComp from "../components/CallComp/CallComp"
import ContactComp from "../components/ContactComp/ContactComp"
import CoverComp from "../components/CoverComp/CoverComp"
import FeaturesComp from "../components/FeaturesComp/FeaturesComp"

const Home = () => {
  return (
    <div>
        <CoverComp/>
        <FeaturesComp/>
        <AboutComp/>
        <CallComp/>
        <ContactComp/>
    </div>
  )
}

export default Home