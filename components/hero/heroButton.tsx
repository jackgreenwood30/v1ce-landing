interface HeroButtonProps {
  style: string;
  text: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ style, text }) => {
  let buttonClass = '';

  if (style === 'light') {
    buttonClass = 'bg-white text-black rounded-full border text-[15px] font-semibold w-[210px] h-[42px] cursor-pointed';
  } else if (style === 'outlined') {
    buttonClass = 'bg-transparent text-white border-black rounded-full border-[2px] border-v1ce-orange text-[15px] font-semibold w-[210px] h-[42px] cursor-pointed';
  }

  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
};

export default HeroButton;
