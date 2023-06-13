import TestimonialSlider from "./testimonialSlider"
import TrustedBrands from "./trustedBrands"

const Testimonials = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-10 md:py-16 border-b border-b-v1ce-orange">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent text-center">Industry Leaders that use V1CE</h1>
        <div className="pt-10">
          <TestimonialSlider/>
        </div>
        <div className="pt-10">
          <TrustedBrands/>
        </div>
        <div className="pt-8">
          <p className="max-w-sm text-lg w-md font-bold bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent text-center">
            Join these companies making use of the latest NFC technology
          </p>
        </div>
        <div className="pt-8">
          <button className="bg-white py-2 px-6 hover:px-10 rounded-full transition-all duration-200 ease-in-out">Join now</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials