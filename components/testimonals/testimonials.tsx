import TestimonialSlider from "./testimonialSlider"

const Testimonials = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-10 md:py-16">
      <div>
        <h1 className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent text-center">Industry Leaders that use V1CE</h1>
        <div className="container pt-10">
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials