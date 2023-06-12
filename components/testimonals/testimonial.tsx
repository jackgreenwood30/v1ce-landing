import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  style: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ style }) => {
  return (
    <div className={`${style === 1 ? 'scale-[%]  md:scale-[85%] opacity-95' : ''}`}>
      <div className='bg-white max-w-fit rounded-xl p-3 flex md:block flex-col justify-center items-center'>
        <div className='flex items-center'>
          <Image
            src='/assets/images/testimonialMugshots/Jack.png'
            alt='Jack'
            width={60}
            height={60}
            className='rounded-full'
          />
          <div className='ml-3'>
            <h2 className='text-2xl font-semibold'>Jack</h2>
            <p className='leading-none'>Figma Man</p>
          </div>
        </div>
        <div className='mt-4'>
          <h1 className='max-w-[250px] text-center text-xl font-semibold'>I love using V1CE</h1>
          <p className='max-w-[250px] leading-none text-center mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
            maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis
            id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
