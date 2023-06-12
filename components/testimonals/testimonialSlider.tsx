import Testimonial from "./testimonial"

const TestimonialSlider = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-9">
      <Testimonial style={1}/>
      <Testimonial style={2}/>
      <Testimonial style={1}/>
    </div>
  )
}

export default TestimonialSlider