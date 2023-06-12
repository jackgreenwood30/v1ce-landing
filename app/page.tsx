import Hero from "@components/hero/heroComponent"
import KeyBenifits from "@components/keyBenifits/keyBenifits"
import V1cePro from "@components/v1cePro/v1cePro"
import Testimonials from "@components/testimonals/testimonials"

const Home = () => {
  return (
    <>
      <Hero/>
      <V1cePro/>
      <KeyBenifits/>
      <Testimonials/>
    </>
  )
}

export default Home