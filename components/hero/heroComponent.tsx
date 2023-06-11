import Image from 'next/image';
import HeroButton from './heroButton';
import heroData from './hero.json';

const Hero = () => {
  return (
    <div className="relative w-screen h-[90vh] max-h-[90vh]">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/heroImage.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white max-w-7xl text-center leading-none font-medium">
          {heroData.hero.heroTitle}
        </h1>
        <p className="mt-4 text-base lg:text-lg text-white font-light max-w-2xl text-center leading-relaxed">
          {heroData.hero.heroSubtitle}
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 md:gap-8">
          {heroData.buttons.map((button, index) => (
            <HeroButton key={index} text={button.buttonText} style={button.buttonStyle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
