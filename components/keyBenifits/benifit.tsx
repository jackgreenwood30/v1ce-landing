import React from 'react';
import Image from 'next/image';

interface BenifitProps {
  variant: number;
  title: React.ReactNode;
  subtitle: string;
  altText: string;
}

const Benifit: React.FC<BenifitProps> = ({ variant, title, subtitle, altText }) => {
  return (
    <>
      <div className='bg-white py-10 md:py-16 flex justify-center items-center'>
        <div className={`flex flex-col gap-10 md:gap-16 ${variant === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/assets/images/benefitImage.png" alt={altText} width={545} height={333} />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className='text-4xl md:text-5xl font-semibold leading-none'>{title}</h1>
            <p className='text-base md:text-lg font-medium leading-normal mt-5 md:mt-8'>{subtitle}</p>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-white via-[#FFA033] to-white h-[1px]'></div>
    </>
  );
};

export default Benifit;
