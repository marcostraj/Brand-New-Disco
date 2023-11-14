import './HomePage.css'
import Home from '../../components/main/Home/Home.tsx'
import SecondSection from '../../components/main/SecondSection/SecondSection.tsx'
import ThirdSection from '../../components/main/ThirdSection/ThirdSection.tsx'
import FourthSection from '../../components/main/FourthSection/FourthSection.tsx'
import FifthSection from '../../components/main/FifthSection/FifthSection.tsx'
import SixthSection from '../../components/main/SixthSection/SixthSection.tsx'
import SeventhSection from '../../components/main/SeventhSection/SeventhSection.tsx'
import Footer2 from '../../components/Footer2/Footer2.tsx'
import Contato from '../../components/Contato/Contato.tsx'

function HomePage() {

  return (
    <>
        <Home />
        <SecondSection />
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        <SeventhSection/>
        <Footer2 />
        <Contato />
    </>
  )
}

export default HomePage