import Image from 'next/image';

import v1ceProData from './v1cePro.json'

const V1cePro = () => {
  return (
    <div>
      <div className='w-screen h-[2px] bg-gradient-to-r from-black from-10% via-[#FF5C00] via-50% to-black to-90%'></div>
      <div className='w-screen h-[125px] flex items-center justify-center bg-black'>
        <Image src={v1ceProData.imageUrl} width={80} height={80} alt="V1CE Pro Crown"/>
        <div className='flex flex-col gap-[6px] ml-6'>
          <h2 className="text-white text-xl font-semibold leading-none uppercase">{v1ceProData.title}</h2>
          <p className="text-white text-sm max-w-[280px] leading-none">Memberships now starting from just <span className='text-v1ce-orange font-semibold'>{v1ceProData.price}</span> a month.</p>
          <a className="cursor-pointer" href={v1ceProData.linkUrl}>
            <p className='text-white opacity-50 text-sm leading-none'>
              {v1ceProData.linkText} {'>'}
            </p>
          </a>
        </div>
      </div>
      <div className='w-screen h-[2px] bg-gradient-to-r from-black from-10% via-[#FF5C00] via-50% to-black to-90%'></div>
    </div>
  );
};

export default V1cePro;
